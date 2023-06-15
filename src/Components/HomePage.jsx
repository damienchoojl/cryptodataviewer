import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const [cryptoInput, setCryptoInput] = useState("");
  const [cryptoList, setCryptoList] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleCryptoSearch = async () => {
    if (cryptoInput === "") {
      setErrorMessage("Please enter a valid crypto name");
      return;
    }

    const response = await fetch(
      `https://api.coingecko.com/api/v3/exchanges/${cryptoInput.toLowerCase()}`
    );
    const data = await response.json();
    if (data) {
      setCryptoList([data]);
      setSearchHistory((prevHistory) => [
        ...prevHistory,
        { name: cryptoInput, time: new Date().toLocaleString() },
      ]);
      setErrorMessage("");
    } else {
      setCryptoList([]);
      setErrorMessage("No results found");
    }
  };

  const handleCryptoClick = (id) => {
    navigate(`/exchanges/${id}`);
  };

  const handleShowHistory = () => {
    setShowHistory(true);
  };

  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          value={cryptoInput}
          required
          onChange={(event) => setCryptoInput(event.target.value)}
          id="floatingInput"
          placeholder=""
        />
        <label htmlFor="floatingInput">Crypto Market</label>
      </div>
      <button className="btn btn-primary" onClick={handleCryptoSearch}>
        Search
      </button>
      <button className="btn btn-primary" onClick={handleShowHistory}>
        Search History
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
      {errorMessage && <p>{errorMessage}</p>}
      {showHistory && searchHistory.length > 0 && (
        <div>
          <h2>Search History</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {searchHistory.map((query, index) => (
                <tr key={index}>
                  <td>{query.name}</td>
                  <td>{query.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
