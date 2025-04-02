import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const VehicleChart = ({ events }) => {
  const timestamps = events.map((event) =>
    new Date(event.timestamp).toLocaleTimeString()
  );
  const speeds = events.map((event) => event.speed);
  const fuelLevels = events.map((event) => event.fuelLevel);
  const engineTemps = events.map((event) => event.engineTemp);

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: "Speed (km/h)",
        data: speeds,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Fuel Level (%)",
        data: fuelLevels,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "Engine Temp (°C)",
        data: engineTemps,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>📊 Vehicle Data Trends</h2>
      <Line data={data} />
    </div>
  );
};

export default VehicleChart;
