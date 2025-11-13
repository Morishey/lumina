import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#FF204E" },
    secondary: { main: "#A0153E" },
    background: { default: "#00224D", paper: "#5D0E41" },
    text: { primary: "#FFFFFF", secondary: "rgba(255,255,255,0.75)" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 9,
    h6: { fontSize: "0.9rem", fontWeight: 700 },
    subtitle1: { fontSize: "0.8rem" },
    body1: { fontSize: "0.8rem" },
    body2: { fontSize: "0.75rem" },
    button: { textTransform: "none", fontSize: "0.75rem", fontWeight: 600 },
  },
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("authToken", "123"); // simulate login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // clear token
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
          <Routes>
            {/* Login Page */}
            <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
            />

            {/* Dashboard Page */}
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />}
            />

            {/* Catch all unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
