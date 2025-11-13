import React from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login({ onLogin }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  React.useEffect(() => {
    // Fade-in effect on initial load
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    // Simulate loading before logging in
    setTimeout(() => {
      setButtonLoading(false);
      onLogin(); // Notify App.jsx to update isLoggedIn state
    }, 2500);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        bgcolor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        touchAction: "none",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
        opacity: loading ? 0 : 1,
        transition: "opacity 1s ease-in-out",
        zIndex: 0,
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605902711622-cfb43c4437b2?auto=format&fit=crop&q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />

      {/* Animated Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,32,78,0.5), rgba(0,34,77,0.55))",
          animation: "gradientShift 10s ease infinite alternate",
          zIndex: 1,
          "@keyframes gradientShift": {
            from: {
              background:
                "linear-gradient(135deg, rgba(255,32,78,0.5), rgba(0,34,77,0.55))",
            },
            to: {
              background:
                "linear-gradient(135deg, rgba(0,34,77,0.55), rgba(93,14,65,0.45))",
            },
          },
        }}
      />

      {/* Login Card */}
      <Container
        maxWidth="xs"
        sx={{
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          height: "100%",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            width: "100%",
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            opacity: loading ? 0 : 1,
            transform: loading ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 1.2s ease, transform 1s ease",
          }}
        >
          {/* Logo / Title */}
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#fff",
                letterSpacing: 1,
              }}
            >
              Bank<span style={{ color: "#FF204E" }}>Pro</span>
            </Typography>
            <Typography variant="body2" sx={{ color: "#e2e3e4", mt: 0.5 }}>
              Secure Banking Portal
            </Typography>
          </Box>

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              "& input": {
                fontSize: "16px !important",
              },
            }}
          >
            <TextField
              fullWidth
              label="Email or Username"
              variant="outlined"
              required
              autoComplete="username"
              sx={{
                mb: 3,
                input: { color: "#fff" },
                label: { color: "rgba(255,255,255,0.7)" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                  "&:hover fieldset": { borderColor: "#FF204E" },
                },
              }}
            />

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              required
              autoComplete="current-password"
              sx={{
                mb: 2,
                input: { color: "#fff" },
                label: { color: "rgba(255,255,255,0.7)" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                  "&:hover fieldset": { borderColor: "#FF204E" },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                      disableRipple
                      disableFocusRipple
                      sx={{
                        color: "#fff",
                        "&:focus": { outline: "none" },
                        "&:active": { outline: "none" },
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box textAlign="right" mb={3}>
              <Typography
                variant="body2"
                sx={{
                  color: "#FF90B3",
                  cursor: "pointer",
                  fontWeight: 500,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forgot password?
              </Typography>
            </Box>

            {/* Sign-In Button with loading */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={buttonLoading}
              sx={{
                bgcolor: "#FF204E",
                py: 1.4,
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                animation: buttonLoading
                  ? "none"
                  : "pulseGlow 2.8s infinite ease-in-out",
                boxShadow: "0 0 18px rgba(255,32,78,0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#A0153E",
                  transform: buttonLoading ? "none" : "scale(1.03)",
                  boxShadow: buttonLoading
                    ? "none"
                    : "0 0 28px rgba(160,21,62,0.45)",
                },
                "@keyframes pulseGlow": {
                  "0%, 100%": {
                    boxShadow: "0 0 18px rgba(255,32,78,0.25)",
                  },
                  "50%": {
                    boxShadow: "0 0 30px rgba(255,32,78,0.45)",
                  },
                },
              }}
            >
              {buttonLoading ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
              ) : (
                "Sign In"
              )}
            </Button>

            <Box mt={3} textAlign="center">
              <Typography variant="body2" sx={{ color: "#e2e3e4" }}>
                Don’t have an account?{" "}
                <span
                  style={{
                    color: "#FF204E",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Call to book Appointment
                </span>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
