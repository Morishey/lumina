import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#FFF8E1",
        py: 10,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Welcome to Lumina
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4}>
          Manage your finances easily and securely.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Container>
    </Box>
  );
}
