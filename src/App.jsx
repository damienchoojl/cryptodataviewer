import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import CryptoDetailsPage from "./Components/CryptoDetailsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exchanges/:id" element={<CryptoDetailsPage />} />
    </Routes>
  );
}
