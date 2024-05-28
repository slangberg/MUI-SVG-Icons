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
              This application demonstractes all provided SVG's below.
            </Typography>
          </Grid>
          {iconsArray.map(([name, Icon]) => {
            return (
              <Grid key={name} xs={1} item sx={{ textAlign: "center" }}>
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
