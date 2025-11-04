import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", textAlign: "center", py: 3, mt: 8 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Lumina. All rights reserved.
      </Typography>
    </Box>
  );
}
