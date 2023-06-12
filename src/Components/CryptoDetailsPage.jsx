import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CryptoDetailsInfo from "./CryptoDetailsInfo";
import Calculator from "./Calculator";

export default function CryptoDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cryptoDetails, setCryptoDetails] = useState(null);
  const [calculatorVisible, setCalculatorVisible] = useState(false);

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
    setCalculatorVisible(true);
  };

  const handleBuy = (tradeUrl) => {
    window.open(tradeUrl, "_blank");
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
      {calculatorVisible && (
        <Calculator
          currency={cryptoDetails.tickers[1]?.last}
          tradeUrl={cryptoDetails.tickers[3]?.trade_url}
          handleBuy={handleBuy}
        />
      )}
    </div>
  );
}
