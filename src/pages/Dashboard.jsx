import React, { useState } from "react";
import { Box, useMediaQuery, Drawer } from "@mui/material";
import TopBar from "../components/TopBar";
import SideNav from "../components/SideNav";
import MainContent from "../components/MainContent";

export default function Dashboard() {
  const isDesktop = useMediaQuery("(min-width:1200px)");
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
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
      {/* ====== SIDEBAR (desktop and mobile) ====== */}
      {isDesktop ? (
        // Permanent sidebar on desktop
        <Box
          sx={{
            width: 260,
            flexShrink: 0,
            borderRight: "1px solid rgba(0,0,0,0.08)",
            bgcolor: "background.paper",
          }}
        >
          <SideNav />
        </Box>
      ) : (
        // Drawer (slide-in menu) for mobile/tablet
        <Drawer
          anchor="left"
          open={openSidebar}
          onClose={handleSidebarToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 240,
              bgcolor: "background.paper",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            },
          }}
        >
          <SideNav onClose={handleSidebarToggle} />
        </Drawer>
      )}

      {/* ====== MAIN CONTENT AREA ====== */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Optional: keep TopBar if needed */}
        <TopBar />

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: { xs: 2, sm: 3, md: 5 },
            pb: 4,
          }}
        >
          <MainContent
            isDesktop={isDesktop}
            onToggleSidebar={handleSidebarToggle}
          />
        </Box>
      </Box>
    </Box>
  );
}
