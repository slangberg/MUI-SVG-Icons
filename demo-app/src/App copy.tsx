import * as Icons from "./icons";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
function App() {
  const iconsArray = Object.entries(Icons);
  return (
    <Box sx={{ justifyContent: "center", flexDirection: "row" }}>
      <Container component="main" maxWidth="xl">
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid xs={12} item sx={{ textAlign: "center" }}>
            <Typography variant="h1" gutterBottom>
              MUI 5 + SVGR Icons Example
            </Typography>
            <Typography sx={{ mb: 2 }}>
              `mui-svgr-generator` is a command-line tool to generate
              MUI-compatible SVG React components using SVGR. This tool helps
              streamline the process of converting SVG files into Material-UI
              Icon components.
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <Typography variant="h3" gutterBottom>
              How to use
            </Typography>
            <code>npm install -g mui-svgr-generator</code>
            <Typography variant="h3" gutterBottom>
              Options
            </Typography>
            <ul>
              <li>
                <code>-V, --version</code>: Output the version number
              </li>
              <li>
                <code>-i, --inDir &lt;directory&gt;</code>: Input directory for
                the icons
              </li>
              <li>
                <code>-o, --outDir &lt;directory&gt;</code>: Output directory
                for the icons (default: &quot;./icons&quot;)
              </li>
              <li>
                <code>
                  -ts, --typescript &lt;&quot;true&quot; | &quot;false&quot;&gt;
                </code>{" "}
                : Whether to generate typescript icons (true or false) (default:
                &quot;true&quot;)
              </li>
              <li>
                <code>-h, --help</code>: Display help for command
              </li>
            </ul>
          </Grid>
          {iconsArray.map(([name, Icon]) => {
            return (
              <Grid
                key={name}
                xs={1}
                item
                sx={{ textAlign: "center", color: "#FFF" }}
              >
                <Icon />
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="icon-name"
                >
                  {name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
