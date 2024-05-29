const { exec } = require("child_process");
const { program } = require("commander");
const fs = require("fs");
const path = require("path");
const colors = require("colors/safe");

const config = {
  typescript: "true",
  outDir: "./icons",
};

// Determine the directory of the current script
const scriptDir = __dirname;
// Construct the path to the configuration file
const configFilePath = path.join(scriptDir, "config.js");

// Validation function for TypeScript option
function validateTypescript(value) {
  if (value !== "true" && value !== "false") {
    console.error(
      `Invalid value for --typescript. Valid values are "true" or "false".`
    );
    process.exit(1);
  }
  return value;
}

function setTypescript(value) {
  return value === "false" ? "" : "--typescript";
}

function isValidDirectory(directory) {
  return fs.existsSync(directory) && fs.lstatSync(directory).isDirectory();
}

function directoryHasFiles(directory) {
  return fs.readdirSync(directory).length > 0;
}

function promptUser(question, callback) {
  process.stdout.write(question);
  process.stdin.setEncoding("utf8");
  process.stdin
    .once("data", (data) => {
      callback(data.trim());
    })
    .resume();
}

// Setup the command-line interface with commander
program
  .version("1.0.0")
  .option("-i, --inDir <directory>", "Input directory for the icons")
  .option(
    "-o, --outDir <directory>",
    "Output directory for the icons",
    config.outDir
  )
  .option(
    "-ts, --typescript <value>",
    "Whether to generate typescript icons (true or false)",
    validateTypescript,
    config.typescript
  )
  .parse(process.argv);

const { outDir, inDir, typescript } = program.opts();

// Validate input directory
if (!inDir || !isValidDirectory(inDir)) {
  console.error(`Invalid input directory: ${inDir}`);
  process.exit(1);
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Proceed based on the state of the output directory
if (directoryHasFiles(outDir)) {
  promptUser(
    colors.yellow.bold(
      `The output directory (${outDir}) already contains files. Do you want to overwrite them? (y/n): `
    ),
    (answer) => {
      if (answer.toLowerCase() === "y") {
        runCommand();
      } else {
        console.log(colors.red.bold("Icon generation is cancelled."));
        process.exit(1);
      }
    }
  );
} else {
  runCommand();
}

function runCommand() {
  let command = `npx @svgr/cli ${setTypescript(
    typescript
  )} --out-dir ${outDir} ${inDir} --config-file ${configFilePath}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(stderr);
      return;
    }

    const parsedOutput = stdout.split("\n");
    const icons = parsedOutput
      .map((line) => {
        const sLine = line.split("->");
        if (sLine[0] && sLine[1]) {
          const name = sLine[1].split("/");
          return `${colors.blue.bold(name[name.length - 1])}: ${sLine[1]}`;
        }
        return undefined;
      })
      .filter((val) => !!val);

    console.log(colors.green.bold("Success: Icon generation complete"));
    console.log(`
      ${colors.blue.bold("Input Directory")}: ${inDir}
      ${colors.blue.bold("Output Directory")}: ${outDir}
      ${colors.blue.bold("Icon Count")}: ${parsedOutput.length}
    `);

    promptUser(
      colors.yellow.bold(`Would you like to see the generated icons? (y/n): `),
      (answer) => {
        if (answer.toLowerCase() === "y") {
          console.log(icons.join("\n"));
        }
        process.exit(1);
      }
    );
  });
}
