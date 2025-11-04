import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StatCard from "./StatCard";
import RecentTable from "./RecentTable";
import Sparkline from "./Sparkline";

export default function MainContent({ isDesktop, onToggleSidebar }) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
        px: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* ===== TOP BAR (no Amber Bank text) ===== */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Hamburger icon for all views */}
        <IconButton
          onClick={onToggleSidebar}
          sx={{
            color: "#00224D",
            bgcolor: "rgba(0,0,0,0.04)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.08)" },
            display: "flex",
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Action Button */}
        <Button
          variant="contained"
          sx={{
            bgcolor: "primary.main",
            fontWeight: 600,
            px: 3,
            py: 1.2,
            borderRadius: 2,
            boxShadow: "0 6px 18px rgba(255,32,78,0.25)",
            "&:hover": {
              bgcolor: "#A0153E",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(160,21,62,0.35)",
            },
          }}
        >
          New Transfer
        </Button>
      </Box>

      {/* ===== MAIN DASHBOARD ===== */}
      <Grid container spacing={3}>
        {/* Overview */}
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#00224D",
                mb: 3,
              }}
            >
              Overview
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <StatCard
                  title="Balance"
                  value="₦254,300.00"
                  subtitle="Available balance"
                  trend="+4.2%"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StatCard
                  title="Transactions"
                  value="72"
                  subtitle="This month"
                  trend="-1.4%"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StatCard
                  title="Cards"
                  value="2"
                  subtitle="Active cards"
                  trend="+0.8%"
                />
              </Grid>
            </Grid>

            {/* Realistic Performance Chart */}
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: "#00224D",
                }}
              >
                Performance
              </Typography>
              <Paper
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                }}
              >
                <Box
                  sx={{
                    height: 220,
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <Sparkline
                    color="#FF204E"
                    background="#FFF"
                    showGrid
                    showPoints
                    thickness={2.5}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "#FF204E",
                      mr: 1,
                    }}
                  >
                    ₦14,200
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#5D0E41", fontWeight: 500 }}
                  >
                    Revenue (last 7 days)
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, color: "#00224D" }}
            >
              Quick Actions
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#FF204E",
                  py: 1.4,
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#A0153E",
                    boxShadow: "0 6px 18px rgba(160,21,62,0.3)",
                  },
                }}
              >
                Send Money
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: "#00224D",
                  borderColor: "#FF204E",
                  py: 1.3,
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "rgba(255, 32, 78, 0.08)",
                    borderColor: "#A0153E",
                  },
                }}
              >
                Request Payment
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: "#00224D",
                  borderColor: "#5D0E41",
                  py: 1.3,
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "rgba(93, 14, 65, 0.08)",
                  },
                }}
              >
                Manage Cards
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Box sx={{ mt: 3 }}>
        <RecentTable />
      </Box>
    </Container>
  );
}
