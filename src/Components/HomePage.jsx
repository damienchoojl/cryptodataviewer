import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const [cryptoInput, setCryptoInput] = useState("");
  const [cryptoList, setCryptoList] = useState([]);

  const navigate = useNavigate();

  const handleCryptoSearch = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/exchanges/${cryptoInput.toLowerCase()}`
    );
    const data = await response.json();
    if (data) {
      setCryptoList([data]);
    } else {
      setCryptoList([]);
    }
  };

  const handleCryptoClick = (id) => {
    navigate(`/exchanges/${id}`);
  };

  return (
    <>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          value={cryptoInput}
          required
          onChange={(event) => setCryptoInput(event.target.value)}
          id="floatingInput"
          placeholder="
        "
        />
        <label for="floatingInput">Crypto Market</label>
      </div>
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
