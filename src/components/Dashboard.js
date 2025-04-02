import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEvents, getEventsByType, getEventsByTime } from "../api/api";
import VehicleChart from "./VehicleChart";
import Shimmer from "./Shimmer";
import "./Dashboard.css";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventType, setEventType] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const data = await getAllEvents();
    setEvents(data);
    setLoading(false);
  };

  const handleFilterByType = async (type) => {
    if (type === "") {
      fetchEvents();
    } else {
      const data = await getEventsByType(type);
      setEvents(data);
    }
  };

  const handleFilterByTime = async () => {
    if (startTime && endTime) {
      const data = await getEventsByTime(startTime, endTime);
      setEvents(data);
    }
  };

  if (loading) return <Shimmer />;
  return (
    <div className="dashboard">
      <h1>🚗 Vehicle Event Dashboard</h1>

      <button className="diagram-btn" onClick={() => navigate("/diagrams")}>
        📊 View Diagrams
      </button>

      <div className="filters">
        <select
          className="filter-select"
          value={eventType}
          onChange={(e) => {
            setEventType(e.target.value);
            handleFilterByType(e.target.value);
          }}
        >
          <option value="">All Events</option>
          <option value="Ignition On">Ignition On</option>
          <option value="Ignition Off">Ignition Off</option>
          <option value="Time Interval">Time Interval</option>
        </select>

        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <button className="filter-btn" onClick={handleFilterByTime}>
          🔍 Search by Time
        </button>
      </div>

      <div className="chart-container">
        <VehicleChart events={events} />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Event Type</th>
              <th>Vehicle ID</th>
              <th>Location</th>
              <th>Speed (km/h)</th>
              <th>Fuel Level (%)</th>
              <th>Battery Status</th>
              <th>Odometer (km)</th>
              <th>Engine Temp (°C)</th>
              <th>Tire Pressure (PSI)</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{new Date(event.timestamp).toLocaleString()}</td>
                <td>{event.eventType}</td>
                <td>{event.vehicleId}</td>
                <td>{`${event.location.latitude}, ${event.location.longitude}`}</td>
                <td>{event.speed}</td>
                <td>{event.fuelLevel}%</td>
                <td>{event.batteryStatus}</td>
                <td>{event.odometer}</td>
                <td>{event.engineTemp}°C</td>
                <td>
                  FL: {event.tirePressure.frontLeft}, FR:{" "}
                  {event.tirePressure.frontRight}, RL:{" "}
                  {event.tirePressure.rearLeft}, RR:{" "}
                  {event.tirePressure.rearRight}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
