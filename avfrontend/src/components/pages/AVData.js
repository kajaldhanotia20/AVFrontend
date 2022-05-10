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


export default function AVData({}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const socket = io("http://localhost:3100", {
      transports: ["websocket", "polling"],
    });
    socket.on("Form API", res => {
      console.log(res)
      setData(res);
      console.log(data)
    }); 
    return () => socket.disconnect();
  },[]); 

  return (
    <div className="SensorData">
      <h1 className="main-para">Real Time Carla Usage</h1>
     {  <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" />
      </LineChart> }
    </div>
  );
}
