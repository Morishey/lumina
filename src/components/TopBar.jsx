import React from "react";
import { AppBar, Toolbar, Box, IconButton, InputBase, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function TopBar() {
  return (
    <AppBar position="static" elevation={0} sx={{
      bgcolor: "transparent",
      backdropFilter: "blur(6px)",
      borderBottom: "1px solid rgba(255,255,255,0.04)"
    }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{
            fontWeight: 700, color: "primary.main", fontSize: 20
          }}>Lumina</Box>
          <Box sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            bgcolor: "rgba(255,255,255,0.03)",
            px: 1.2, py: 0.4, borderRadius: 2
          }}>
            <SearchIcon sx={{ mr: 1, color: "text.secondary" }} />
            <InputBase placeholder="Search transactions, accounts..." sx={{ color: "white", width: 260 }} />
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton sx={{
            color: "white",
            "&:hover": { color: "primary.main" },
            transition: "all 200ms ease"
          }}>
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>JD</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
