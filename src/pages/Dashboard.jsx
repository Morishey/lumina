import React, { useState } from "react";
import { Box, useMediaQuery, Drawer } from "@mui/material";
import TopBar from "../components/TopBar";
import SideNav from "../components/SideNav";
import MainContent from "../components/MainContent";

export default function Dashboard() {
  const isDesktop = useMediaQuery("(min-width:1200px)");
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebar((s) => !s);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      {/* Desktop: permanent sidebar */}
      {isDesktop && (
        <Box
          sx={{
            width: 260,
            flexShrink: 0,
            borderRight: "1px solid rgba(0,0,0,0.06)",
            bgcolor: "background.paper",
          }}
        >
          <SideNav />
        </Box>
      )}

      {/* Mobile: drawer */}
      {!isDesktop && (
        <Drawer
          anchor="left"
          open={openSidebar}
          onClose={handleSidebarClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 260,
              bgcolor: "background.paper",
              boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
            },
          }}
        >
          {/* pass onClose so SideNav can show a close button inside the drawer */}
          <SideNav onClose={handleSidebarClose} />
        </Drawer>
      )}

      {/* Main area */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <TopBar onToggleSidebar={handleSidebarToggle} />
        <Box sx={{ flex: 1, overflowY: "auto", px: { xs: 2, sm: 3, md: 5 }, pb: 4 }}>
          <MainContent isDesktop={isDesktop} />
        </Box>
      </Box>
    </Box>
  );
}
