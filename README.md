# 🚗 Vehicle Event Dashboard

A simple web application to visualize vehicle event data from a `data.json` file. It includes event filtering, interactive charts, and a dynamic UI with a shimmer effect for smooth loading.

---

## 📌 Features

✅ Display vehicle event data in a structured table  
✅ Filter events by **type** (Ignition On, Ignition Off, Time Interval)  
✅ Filter events by **time range** using datetime pickers  
✅ **Interactive charts** to visualize Speed, Fuel Level, and Engine Temperature using **Chart.js**  
✅ **Shimmer UI** for a smooth loading experience  
✅ Simple API simulation using **data.json** (no database required)  

---

## 🛠 Tech Stack

### **Frontend**  
- ⚛️ React.js  
- 📊 Chart.js (for graphical visualization)  
- 🎨 CSS (for styling)  

### **Backend (Simulated with JSON File)**  
- 🚀 Express.js (Node.js framework)  
- 🔗 CORS (Cross-Origin Resource Sharing)  
- 📂 Data fetched from `data.json` (no database required)  

### **State Management**  
- ⚡ React Hooks (`useState`, `useEffect`)  

---

## 🚀 Usage

### **1️⃣ Run the Backend**
```bash
cd server
npm install
npm start
