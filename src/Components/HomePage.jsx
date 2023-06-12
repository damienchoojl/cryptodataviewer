import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const [cryptoInput, setCryptoInput] = useState("");
  const [cryptoList, setCryptoList] = useState([]);

  const navigate = useNavigate();

  const handleCryptoSearch = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/exchanges/${cryptoInput.toLowerCase()}`
      );
      const data = await response.json();
      if (data) {
        setCryptoList([data]);
      } else {
        setCryptoList([]);
      }
    } catch (error) {}
  };

  const handleCryptoClick = (id) => {
    navigate(`/exchanges/${id}`);
  };

  return (
    <>
      Crypto Market:{" "}
      <input
        type="text"
        value={cryptoInput}
        required
        onChange={(e) => setCryptoInput(e.target.value)}
      />
      <button className="btn btn-outline-primary" onClick={handleCryptoSearch}>
        Search
      </button>
      {cryptoList.map((crypto) => (
        <Link
          to={`/exchanges/${cryptoInput}`}
          key={crypto.id}
          style={{ display: "block" }}
          onClick={() => handleCryptoClick(crypto.id)}
        >
          {crypto.name}
        </Link>
      ))}
    </>
  );
}
