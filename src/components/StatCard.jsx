import React from "react";
import { Paper, Typography, Box } from "@mui/material";

export default function StatCard({ title, value, subtitle, trend }) {
  return (
    <Paper sx={{
      p: 2.2,
      borderRadius: 2,
      bgcolor: "rgba(255,255,255,0.03)",
      transition: "transform 250ms ease, box-shadow 250ms ease",
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 20px 50px rgba(255,32,78,0.18), inset 0 -6px 20px rgba(160,20,62,0.04)"
      }
    }}>
      <Typography variant="caption" sx={{ color: "text.secondary" }}>{title}</Typography>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>{value}</Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>{subtitle}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ color: "primary.main", fontWeight: 700 }}>{trend}</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
