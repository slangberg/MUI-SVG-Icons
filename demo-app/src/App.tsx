import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  CssBaseline,
} from "@mui/material";
import IconGrid from "./IconGrid";

const App = (): JSX.Element => {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          mui-svgr-generator
        </Typography>
        <Typography variant="body1" paragraph>
          <code>mui-svgr-generator</code> is a command-line tool to generate
          MUI-compatible SVG React components using SVGR. This tool helps
          streamline the process of converting SVG files into Material-UI Icon
          components compatible with MUI 5.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Installation
        </Typography>
        <Typography variant="body1" paragraph>
          You can install <code>mui-svgr-generator</code> globally using npm:
        </Typography>
        <Paper elevation={3} sx={{ p: 1, mb: 2 }}>
          <Typography component="pre" variant="body2">
            {`npm install -g mui-svgr-generator`}
          </Typography>
        </Paper>
        <Typography variant="h4" gutterBottom>
          Usage
        </Typography>
        <Typography variant="h5" gutterBottom>
          Command Line
        </Typography>
        <Typography variant="body1" paragraph>
          To generate MUI-compatible Icon components from SVG files, you can use
          the following command:
        </Typography>
        <Paper elevation={3} sx={{ p: 1, mb: 2 }}>
          <Typography component="pre" variant="body2">
            {`npx run mui-svgr-generator [options]`}
          </Typography>
        </Paper>
        <Typography variant="h5" gutterBottom>
          Options
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Option</strong>
                </TableCell>
                <TableCell>
                  <strong>Default Value</strong>
                </TableCell>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>-V, --version</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Output the version number</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>-i, --inDir &lt;directory&gt;</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Input directory for the icons</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>-o, --outDir &lt;directory&gt;</TableCell>
                <TableCell>&quot;./icons&quot;</TableCell>
                <TableCell>Output directory for the icons</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  -ts, --typescript &lt;&quot;true&quot; | &quot;false&quot;&gt;
                </TableCell>
                <TableCell>&quot;true&quot;</TableCell>
                <TableCell>
                  Whether to generate TypeScript icons (true or false)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>-h, --help</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Display help for command</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Example
        </Typography>
        <Paper elevation={3} sx={{ p: 1, mb: 2 }}>
          <Typography component="pre" variant="body2">
            {`mui-svgr-generator --i ./svgs -o ./icons`}
          </Typography>
        </Paper>
        <IconGrid />
        <Typography variant="body1" paragraph>
          This will convert all SVG files in the <code>./svgs</code> directory
          into TypeScript React components wrapped with MUI 5's{" "}
          <code>SvgIcon</code> and save them in the <code>./icons</code>{" "}
          directory.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h4" gutterBottom>
          Contributing
        </Typography>
        <Typography variant="body1" paragraph>
          Contributions are welcome! Please feel free to submit a Pull Request.
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h4" gutterBottom>
          License
        </Typography>
        <Typography variant="body1" paragraph>
          This project is licensed under the MIT License.
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
