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
  typography: { fontFamily: "Inter, Poppins, Arial, sans-serif" },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          transition: "all 250ms ease",
        },
      },
    },
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
