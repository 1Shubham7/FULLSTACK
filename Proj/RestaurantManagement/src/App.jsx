import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Uncomment other routes as needed */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          {/* <Route path="/404" element={<Four />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
