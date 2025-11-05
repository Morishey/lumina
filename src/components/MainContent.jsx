import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";
import StatCard from "./StatCard";
import RecentTable from "./RecentTable";
import Sparkline from "./Sparkline";

export default function MainContent({ isDesktop }) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
        px: { xs: 1, sm: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // center grid contents on mobile
        gap: 4,
      }}
    >
      {/* ===== OVERVIEW SECTION ===== */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          width: { xs: "95%", sm: "95%", md: "100%" },
          alignItems: "stretch",
        }}
      >
        {/* Overview + Performance */}
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              bgcolor: "background.paper",
              p: { xs: 2.5, md: 3 },
              borderRadius: 3,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#00224D",
                }}
              >
                Overview
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FF204E",
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

            {/* Stat cards — each 95% width on mobile */}
            <Grid
              container
              spacing={2}
              justifyContent="center"
              sx={{ width: "100%" }}
            >
              <Grid item xs={12} sm={10} md={4}>
                <StatCard
                  title="Balance"
                  value="₦254,300.00"
                  subtitle="Available balance"
                  trend="+4.2%"
                />
              </Grid>
              <Grid item xs={12} sm={10} md={4}>
                <StatCard
                  title="Transactions"
                  value="72"
                  subtitle="This month"
                  trend="-1.4%"
                />
              </Grid>
              <Grid item xs={12} sm={10} md={4}>
                <StatCard
                  title="Cards"
                  value="2"
                  subtitle="Active cards"
                  trend="+0.8%"
                />
              </Grid>
            </Grid>

            {/* Performance section */}
            <Box sx={{ mt: 4, width: "100%" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 1.5,
                  fontWeight: 700,
                  color: "#00224D",
                  ml: { xs: 1, md: 0 },
                }}
              >
                Performance
              </Typography>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "#F8F9FB",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 3,
                  width: { xs: "95%", sm: "95%", md: "100%" },
                  mx: "auto",
                }}
              >
                <Box sx={{ flex: 1, minWidth: 200 }}>
                  <Sparkline />
                </Box>
                <Box sx={{ textAlign: "right", minWidth: 160 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, color: "#FF204E" }}
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

        {/* ===== QUICK ACTIONS ===== */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            sx={{
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              height: "100%",
              width: { xs: "95%", sm: "95%", md: "100%" },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, color: "#00224D" }}
            >
              Quick Actions
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
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

      {/* ===== RECENT ACTIVITY ===== */}
      <Box
        sx={{
          mt: 3,
          width: { xs: "95%", sm: "95%", md: "100%" },
        }}
      >
        <RecentTable />
      </Box>
    </Container>
  );
}
