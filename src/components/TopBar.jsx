import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
      <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Left: hamburger then logo */}
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

          <Box sx={{ fontWeight: 700, color: "primary.main", fontSize: 18 }}>
            {/* logo text - change as needed */}
            Lumina{" "}
          </Box>
        </Box>

        {/* Center: search - this will be centered due to flex:1 and justifyCenter */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "rgba(0,0,0,0.04)",
              px: 1,
              py: 0.4,
              borderRadius: 2,
              width: { xs: "85%", sm: "65%", md: "50%" },
              maxWidth: 640,
            }}
          >
            <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
            <InputBase
              placeholder="Search transactions, accounts..."
              sx={{ color: "text.primary", width: "100%" }}
            />
          </Box>
        </Box>

        {/* Right: notifications + avatar */}
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
