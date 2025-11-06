import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  { day: "Mon", revenue: 3200 },
  { day: "Tue", revenue: 4100 },
  { day: "Wed", revenue: 3800 },
  { day: "Thu", revenue: 4600 },
  { day: "Fri", revenue: 4200 },
  { day: "Sat", revenue: 5100 },
  { day: "Sun", revenue: 4800 },
];

export default function Sparkline() {
  return (
    <Box sx={{ width: "100%", height: 220 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF204E" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#A0153E" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/* Subtle background grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />

          {/* X and Y axis */}
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12, fill: "#5D0E41" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#5D0E41" }}
            axisLine={false}
            tickLine={false}
            width={40}
          />

          {/* Tooltip with custom style */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: 8,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontSize: 12,
            }}
            labelStyle={{ fontWeight: 600, color: "#00224D" }}
            cursor={{ strokeDasharray: "3 3" }}
          />

          {/* Line with gradient */}
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="url(#colorRevenue)"
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2, stroke: "#fff" }}
            activeDot={{
              r: 6,
              stroke: "#FF204E",
              strokeWidth: 3,
              fill: "#fff",
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Subtitle below chart */}
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          textAlign: "center",
          color: "#5D0E41",
          fontWeight: 500,
          opacity: 0.8,
        }}
      >
        Weekly Revenue Overview
      </Typography>
    </Box>
  );
}
