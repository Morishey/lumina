import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";

export default function SideNav({ onClose, onLogout }) {
  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Accounts", icon: <AccountBalanceWalletIcon /> },
    { text: "Transactions", icon: <ReceiptIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Box sx={{ height: "100%", color: "text.primary", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box
        sx={{
          px: 3,
          py: 3,
          borderBottom: "1px solid rgba(0,0,0,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
            Lumina
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Dashboard
          </Typography>
        </Box>

        {onClose && (
          <IconButton onClick={onClose} sx={{ color: "text.primary" }} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      {/* Navigation List */}
      <List sx={{ mt: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            sx={{
              color: "text.primary",
              my: 0.5,
              mx: 1,
              borderRadius: 1.5,
              "&:hover": { bgcolor: "rgba(255,32,78,0.06)" },
            }}
          >
            <ListItemIcon sx={{ color: "primary.main", minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>

      {/* Logout Button */}
      <Box sx={{ px: 2, mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#FF204E",
            py: 1.4,
            fontWeight: 600,
            borderRadius: 2,
            boxShadow: "0 6px 18px rgba(255,32,78,0.25)",
            "&:hover": {
              bgcolor: "#A0153E",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(160,21,62,0.35)",
            },
          }}
          type="button"  // ✅ prevent form submission reload
          onClick={onLogout}
        >
          Logout
        </Button>
      </Box>

      {/* Profile Box */}
      <Box sx={{ mt: "auto", mb: 3, px: 2 }}>
        <Box
          sx={{
            bgcolor: "rgba(255,32,78,0.08)",
            px: 2,
            py: 2,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              bgcolor: "primary.main",
              boxShadow: "0 8px 24px rgba(255,32,78,0.12)",
            }}
          />
          <Box>
            <Typography variant="subtitle2">John Doe</Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              View profile
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
