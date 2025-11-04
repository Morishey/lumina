import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", revenue: 3000 },
  { day: "Tue", revenue: 4500 },
  { day: "Wed", revenue: 4000 },
  { day: "Thu", revenue: 6000 },
  { day: "Fri", revenue: 7000 },
  { day: "Sat", revenue: 6500 },
  { day: "Sun", revenue: 8000 },
];

export default function Sparkline() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
        <XAxis dataKey="day" stroke="#5D0E41" />
        <YAxis stroke="#5D0E41" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#FF204E"
          strokeWidth={3}
          dot={{ fill: "#A0153E", strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
