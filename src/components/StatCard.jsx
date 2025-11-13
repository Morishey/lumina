import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export default function StatCard({ title, value, subtitle, trend }) {
  const isPositive = trend?.includes("+");

  // Split value into $ sign and the rest if it starts with $
  const dollarSign = value.startsWith("$") ? "$" : null;
  const amount = dollarSign ? value.slice(1) : value;

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 2.5 },
        borderRadius: { xs: 2, sm: 3 },
        bgcolor: "#FFFFFF",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        width: "100%",
        height: "100%",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(255,32,78,0.12)",
        },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: "#5D0E41",
          fontWeight: 600,
          mb: 0.5,
          textTransform: "uppercase",
          letterSpacing: 0.4,
          fontSize: { xs: "0.75rem", sm: "0.8rem" },
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: "#00224D",
          mb: 0.5,
          wordBreak: "break-word",
          display: "flex",
          alignItems: "center",
          gap: 0.3,
        }}
      >
        {dollarSign && (
          <Box
            component="span"
            sx={{
              fontSize: { xs: "1rem", sm: "0.9rem" }, // smaller dollar sign
              fontWeight: 700,
              color: "#00224D",
            }}
          >
            {dollarSign}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            fontSize: title === "Balance" ? { xs: "1.8rem", sm: "1.6rem" } : { xs: "1.1rem", sm: "1.3rem" },
            fontWeight: 800,
            lineHeight: 1,
            color: "#00224D",
          }}
        >
          {amount}
        </Box>
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#5D0E41",
          opacity: 0.8,
          mb: 1,
          fontSize: { xs: "0.75rem", sm: "0.85rem" },
        }}
      >
        {subtitle}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.6,
          color: isPositive ? "#00B894" : "#FF204E",
          fontWeight: 600,
        }}
      >
        {isPositive ? (
          <TrendingUpIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
        ) : (
          <TrendingDownIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
        )}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: isPositive ? "#00B894" : "#FF204E",
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
          }}
        >
          {trend}
        </Typography>
      </Box>
    </Paper>
  );
}
