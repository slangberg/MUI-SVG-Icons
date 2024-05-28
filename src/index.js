const { exec } = require("child_process");
const { program } = require("commander");

const config = {
  typescript: true,
  outDir: "./icons",
};

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
    "-ts, --typescript",
    "Whether to generate typescript icons",
    config.typescript
  )
  .parse();

program.parse(process.argv);

function setTypescript(value) {
  return value === "false" ? "" : "--typescript";
}

const { outDir, inDir, ts } = program.opts();

// Construct the command to run @svgr/cli
const command = `npx @svgr/cli ${setTypescript(
  ts
)} --out-dir ${outDir} ${inDir}`;

// Execute the command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
