import { Container, CssBaseline } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";

let theme = createTheme();
theme = responsiveFontSizes(theme);



function App() {

  const [darkMode, setDarkMode] = useState(false);
  const palletteType = darkMode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode: palletteType,
      background: {default: palletteType === 'light' ? '#eaeaea': '#121212'}  // This Checks the condition of the state setting the background
    }
  })

  function handleThemeChange() {
    
    setDarkMode(!darkMode);
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />

      <Container>
         <Catalog  />
      </Container>
     
        
    </ThemeProvider>
  );
}

export default App;
