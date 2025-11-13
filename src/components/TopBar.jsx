import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar({ onToggleSidebar }) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* Left side: hamburger and logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            onClick={onToggleSidebar}
            aria-label="open menu"
            sx={{
              bgcolor: "rgba(0,0,0,0.04)",
              color: "primary.main",
              "&:hover": { bgcolor: "rgba(0,0,0,0.08)" },
              mr: 0.5,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ fontWeight: 700, color: "primary.main", fontSize: 16 }}>
            Lumina
          </Box>
        </Box>

        {/* Spacer to push right side content to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right side: notifications and avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton sx={{ color: "text.primary" }}>
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>
            JD
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
