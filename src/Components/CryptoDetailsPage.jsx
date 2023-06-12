import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import CryptoDetailsInfo from "./CryptoDetailsInfo";

export default function CryptoDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cryptoDetails, setCryptoDetails] = useState(null);

  useEffect(() => {
    async function fetchCryptoDetails() {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/exchanges/${id}`
      );
      const data = await response.json();
      setCryptoDetails(data);
    }

    fetchCryptoDetails();
  }, [id]);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCalculator = () => {
    navigate("/calculator");
  };

  if (!cryptoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CryptoDetailsInfo cryptoDetails={cryptoDetails} />
      <button className="btn btn-outline-secondary" onClick={handleHomeClick}>
        Home
      </button>
      <button className="btn btn-outline-secondary" onClick={handleCalculator}>
        Calculator
      </button>
    </div>
  );
}
