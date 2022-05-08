import io from "socket.io-client";
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const socket = io("http://localhost:3300", {
  transports: ["websocket", "polling"],
});

export default function AVData({}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    socket.on("cpu", (cpuPercent) => {
      setData((currentData) => [...currentData, cpuPercent]);
      console.log(data)
    });
  }, []);
  return (
    <div>
      <h1>Real Time Carla Usage</h1>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" />
      </LineChart>
    </div>
  );
}
