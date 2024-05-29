
# mui-svgr-generator

`mui-svgr-generator` is a command-line tool to generate MUI-compatible SVG React components using SVGR. This tool helps streamline the process of converting SVG files into Material-UI Icon components.

## Installation

You can install `mui-svgr-generator` globally using npm:

```bash
npm install -g mui-svgr-generator
```

## Usage

### Command Line

To generate MUI-compatible Icon components from SVG files, you can use the following command:

```bash
npx run mui-svgr-generator [options]
```
### Options
  `-V, --version`: Output the version number
  `-i, --inDir <directory>`: Input directory for the icons
  `-o, --outDir <directory>`: Output directory for the icons (default: "./icons")
  `-ts, --typescript <"true" | "false">` : Whether to generate typescript icons (true or false) (default: "true")
  `-h, --help`: Display help for command

### Example

```bash
mui-svgr-generator --i ./svgs -o ./icons
```

This will convert all SVG files in the `./svgs` directory into TypeScript React components wrapped with MUI's `SvgIcon` and save them in the `./icons` directory.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
