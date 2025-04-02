import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Diagrams from "./components/Diagrams";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/diagrams" element={<Diagrams />} />
      </Routes>
    </Router>
  );
}

export default App;
