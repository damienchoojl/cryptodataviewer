import React, { useState } from "react";

export default function HomePage() {
  const [cryptoInput, setCryptoInput] = useState("");

  const handleCryptoSearch = async () => {
    console.log("searching");
  };

  return (
    <>
      Crypto Exchange:{" "}
      <input
        type="text"
        value={cryptoInput}
        onChange={(e) => setCryptoInput(e.target.value)}
      />
      <button onClick={handleCryptoSearch}>Search</button>
    </>
  );
}
