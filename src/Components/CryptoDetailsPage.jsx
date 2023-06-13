import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CryptoDetailsInfo from "./CryptoDetailsInfo";
import Calculator from "./Calculator";
import MyImage from "/facebook_logo.png";

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

  const handleFacebook = (facebookUrl) => {
    facebookUrl = cryptoDetails.facebook_url;
    window.open(facebookUrl, "_blank");
  };

  return (
    <div>
      <CryptoDetailsInfo cryptoDetails={cryptoDetails} />
      <button className="btn btn-outline-secondary" onClick={handleHomeClick}>
        Home
      </button>
      <button className="btn btn-outline-secondary" onClick={handleCalculator}>
        Calculator
      </button>
      <br></br>
      <p></p>
      <h6>Social Media: </h6>
      <button className="btn btn-outline-primary" onClick={handleFacebook}>
        <img src={MyImage} style={{ width: "30px", height: "30px" }}></img>
      </button>
      <p></p>
      {calculatorVisible && (
        <Calculator
          currency={cryptoDetails.tickers[0]?.last}
          tradeUrl={cryptoDetails.tickers[0]?.trade_url}
          handleBuy={handleBuy}
        />
      )}
    </div>
  );
}
