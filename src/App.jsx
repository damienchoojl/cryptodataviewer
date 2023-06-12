import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import CryptoDetailsPage from "./Components/CryptoDetailsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculator from "./Components/Calculator";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exchanges/:id" element={<CryptoDetailsPage />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  );
}
