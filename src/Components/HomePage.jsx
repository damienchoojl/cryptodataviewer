import React, { useState } from "react";

export default function HomePage() {
  const [cryptoInput, setCryptoInput] = useState("");

  const handleCryptoSearch = async () => {
    console.log("searching");
    const response = await fetch(
      `https://api.coingecko.com/api/v3/exchanges/${cryptoInput.toLowerCase()}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <form>
      Crypto Exchange:{" "}
      <input
        type="text"
        value={cryptoInput}
        required
        onChange={(e) => setCryptoInput(e.target.value)}
      />
      <button onClick={handleCryptoSearch}>Search</button>
    </form>
  );
}
