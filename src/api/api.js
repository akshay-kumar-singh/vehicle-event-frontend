import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const getEventsByType = async (eventType) => {
  try {
    const response = await axios.get(`${API_URL}/events/type/${eventType}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events by type:", error);
    return [];
  }
};

export const getEventsByTime = async (start, end) => {
  try {
    const response = await axios.get(`${API_URL}/events/time?start=${start}&end=${end}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events by time:", error);
    return [];
  }
};
