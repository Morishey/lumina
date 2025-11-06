import React from "react";
import { Paper, Box, Typography, Avatar, Divider } from "@mui/material";
import {
  ArrowDownward,
  ArrowUpward,
  ShoppingCart,
  AccountBalance,
  LocalAtm,
  Restaurant,
  PhoneAndroid,
  Wifi,
  DirectionsCar,
} from "@mui/icons-material";

const transactions = [
  { id: 3, name: "Canopy Pos CAL Purchase", date: "Nov 5, 10:30 AM", amount: "-$2,000.00", type: "debit", icon: <PhoneAndroid sx={{ color: "#5D0E41" }} /> },
  { id: 4, name: "Deposit from Bank", date: "Nov 4, 1:05 PM", amount: "+$60,220.00", type: "credit", icon: <AccountBalance sx={{ color: "#00224D" }} /> },
  { id: 5, name: "IRS Due TPGS Purchase", date: "Nov 3, 4:20 PM", amount: "-$8,700.00", type: "debit", icon: <ShoppingCart sx={{ color: "#A0153E" }} /> },
  { id: 6, name: "Car Payment", date: "Nov 3, 9:00 AM", amount: "-$6,300.00", type: "debit", icon: <DirectionsCar sx={{ color: "#5D0E41" }} /> },
  { id: 7, name: "Insurance Policy", date: "Nov 2, 11:12 PM", amount: "-$4,000.00", type: "debit", icon: <Wifi sx={{ color: "#A0153E" }} /> },
  { id: 8, name: "Internal (Bank) Lumina TRF", date: "Nov 2, 7:20 PM", amount: "-$50,500.00", type: "debit", icon: <Restaurant sx={{ color: "#FF204E" }} /> },
  { id: 9, name: "Salary Credit", date: "Nov 1, 8:00 AM", amount: "+$120,000.00", type: "credit", icon: <LocalAtm sx={{ color: "#00B894" }} /> },
  { id: 10, name: "Utility Bill", date: "Oct 31, 6:50 PM", amount: "-$1200.00", type: "debit", icon: <AccountBalance sx={{ color: "#5D0E41" }} /> },
];

export default function RecentTable() {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        bgcolor: "#fff",
        overflow: "visible", // ✅ prevent inner scroll
      }}
    >
      {transactions.map((tx, index) => (
        <React.Fragment key={tx.id}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: 2, sm: 3 },
              py: { xs: 1.5, sm: 2 },
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.02)",
                transition: "0.25s ease",
              },
            }}
          >
            {/* Left: Icon + Details */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                sx={{
                  bgcolor: "rgba(255,32,78,0.08)",
                  color: "#FF204E",
                  width: 42,
                  height: 42,
                }}
              >
                {tx.icon}
              </Avatar>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: "#00224D",
                    lineHeight: 1.2,
                  }}
                >
                  {tx.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#5D0E41",
                    opacity: 0.8,
                    fontSize: "0.8rem",
                  }}
                >
                  {tx.date}
                </Typography>
              </Box>
            </Box>

            {/* Right: Amount */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: tx.type === "credit" ? "#00B894" : "#FF204E",
              }}
            >
              {tx.amount}
            </Typography>
          </Box>

          {/* Divider */}
          {index < transactions.length - 1 && (
            <Divider sx={{ mx: 2, bgcolor: "rgba(0,0,0,0.06)" }} />
          )}
        </React.Fragment>
      ))}
    </Paper>
  );
}
