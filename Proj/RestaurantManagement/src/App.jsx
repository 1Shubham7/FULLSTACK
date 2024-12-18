import React from 'react';

import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/404" element={<Four />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </div>
  )
}