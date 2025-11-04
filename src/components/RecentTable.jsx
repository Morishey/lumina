import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from "@mui/material";

const rows = [
  { id: 1, desc: "Salary (Acme)", amount: "+₦120,000", date: "2025-10-29" },
  { id: 2, desc: "Electricity bill", amount: "-₦8,200", date: "2025-10-28" },
  { id: 3, desc: "Groceries", amount: "-₦4,900", date: "2025-10-26" },
  { id: 4, desc: "Transfer to Mary", amount: "-₦10,000", date: "2025-10-24" },
];

export default function RecentTable() {
  return (
    <Paper sx={{ mt: 2, p: 2, borderRadius: 2, bgcolor: "background.paper" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>Recent Activity</Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>Showing last 4 transactions</Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "text.secondary", borderBottom: "none" }}>Description</TableCell>
              <TableCell sx={{ color: "text.secondary", borderBottom: "none" }}>Amount</TableCell>
              <TableCell sx={{ color: "text.secondary", borderBottom: "none" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id} sx={{
                "&:hover": { bgcolor: "rgba(255,32,78,0.04)", transform: "translateY(-2px)" },
                transition: "all 200ms ease"
              }}>
                <TableCell sx={{ color: "white", borderBottom: "none" }}>{r.desc}</TableCell>
                <TableCell sx={{ color: r.amount.startsWith("+") ? "primary.main" : "text.primary", borderBottom: "none" }}>{r.amount}</TableCell>
                <TableCell sx={{ color: "text.secondary", borderBottom: "none" }}>{r.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
