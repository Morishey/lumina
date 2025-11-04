import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 260;

export default function SideNav() {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width:900px)");
  const [open, setOpen] = React.useState(isDesktop);

  React.useEffect(() => setOpen(isDesktop), [isDesktop]);

  const content = (
    <Box sx={{ height: "100%", color: "white", display: "flex", flexDirection: "column" }}>
      <Box sx={{ px: 3, py: 4, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
          Lumina
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          Dashboard
        </Typography>
      </Box>

      <List sx={{ mt: 2 }}>
        {[
          { text: "Home", icon: <HomeIcon /> },
          { text: "Accounts", icon: <AccountBalanceWalletIcon /> },
          { text: "Transactions", icon: <ReceiptIcon /> },
          { text: "Settings", icon: <SettingsIcon /> },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              color: "white",
              my: 0.5,
              mx: 1,
              borderRadius: 1.5,
              "&:hover": { bgcolor: "rgba(255,32,78,0.08)" },
            }}
          >
            <ListItemIcon sx={{ color: "primary.main", minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: "auto", mb: 3, px: 2 }}>
        <Box sx={{
          bgcolor: "rgba(255,32,78,0.08)",
          px: 2, py: 2, borderRadius: 2, display: "flex", alignItems: "center", gap: 2
        }}>
          <Box sx={{
            width: 44, height: 44, borderRadius: "50%", bgcolor: "primary.main",
            boxShadow: "0 6px 18px rgba(255,32,78,0.24), inset 0 -4px 10px rgba(160,20,62,0.12)"
          }} />
          <Box>
            <Typography variant="subtitle2">John Doe</Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>View profile</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  // small screen: temporary drawer with toggle
  if (!isDesktop) {
    return (
      <>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: 12,
            left: 12,
            zIndex: 2000,
            bgcolor: "rgba(255,255,255,0.04)",
            color: "white",
            "&:hover": { bgcolor: "rgba(255,32,78,0.08)" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: drawerWidth, height: "100vh", bgcolor: "background.paper", color: "white", p: 0 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
              <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
                <CloseIcon />
              </IconButton>
            </Box>
            {content}
          </Box>
        </Drawer>
      </>
    );
  }

  // desktop: persistent drawer
  return (
    <Drawer
      variant="permanent"
      open
      PaperProps={{
        sx: { width: drawerWidth, bgcolor: "transparent", borderRight: "1px solid rgba(255,255,255,0.04)" }
      }}
    >
      <Box sx={{ width: drawerWidth, p: 0, height: "100vh" }}>{content}</Box>
    </Drawer>
  );
}
