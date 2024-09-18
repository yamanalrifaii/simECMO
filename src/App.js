import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Navbar from './components/Navbar'; // Import the Navbar component
import ECMO from './components/ECMOLayer/ECMOLayer'; // Import the ECMO component

// Add Google Font link to head in index.html or use a Link component in your app
const poppinsFont = "'Poppins', sans-serif";

// Create a dark theme and include Poppins font in typography
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#C2D9FF',
      paper: '#190482',
    },
    text: {
      primary: '#190482',
    },
  },
  typography: {
    fontFamily: poppinsFont, // Apply Poppins font globally
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline /> */}
      
      {/* Use Navbar component here */}
      {/* <Navbar /> */}

      <Container maxWidth={false} sx={{ paddingTop: '20px', height: 'calc(100vh - 64px)' }}>
        {/* Use the ECMO component that contains all the layers */}
        <ECMO />
      </Container>
    </ThemeProvider>
  );
}

export default App;
