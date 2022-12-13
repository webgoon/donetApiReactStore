import { AppBar, Toolbar, Typography, Switch } from "@mui/material";


const label = { inputProps: { 'aria-label': 'Switch demo' } };


interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}


export default function Header({darkMode, handleThemeChange}: Props){

  return(
    <AppBar position="static" sx={{mb: 4}}>
        <Toolbar>
          <Typography variant="h6">
              React Store  
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
    </AppBar>
  )
}
