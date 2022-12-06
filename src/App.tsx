import * as Icons from "./icons"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
function App() {
  const iconsArray = Object.entries(Icons);
  return (
    <div className="App">
      <h1>MUI 5 + SVGR Icons Example</h1>
      <p className="read-the-docs">
        This application demonstractes all provided SVG's below.
      </p>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        {iconsArray.map(([name, Icon]) => {
          return ( 
          <Grid key={name} item sx={{textAlign: 'center'}}>
            <Icon/> 
            <Typography variant="caption" display="block" gutterBottom>
              {name}
            </Typography>
          </Grid>)
        })}
      </Grid>
    </div>
  )
}

export default App
