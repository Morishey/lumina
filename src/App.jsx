import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Dashboard from "./pages/Dashboard";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#FF204E" },    // neon primary
    secondary: { main: "#A0153E" },
    background: {
      default: "#00224D",            // NAVY base
      paper: "#5D0E41",              // MAGENTA paper tone
    },
    text: { primary: "#FFFFFF", secondary: "rgba(255,255,255,0.75)" },
  },
   typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 9, // Default base font size (was 14 by default)
    h6: { fontSize: "0.9rem", fontWeight: 700 },
    subtitle1: { fontSize: "0.8rem" },
    body1: { fontSize: "0.8rem" },
    body2: { fontSize: "0.75rem" },
    button: { textTransform: "none", fontSize: "0.75rem", fontWeight: 600 },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Dashboard />
      </Box>
    </ThemeProvider>
  );
}
