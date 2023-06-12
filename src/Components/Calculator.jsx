import React, { useState } from "react";

export default function Calculator({ currency, tradeUrl }) {
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState(null);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCalculate = () => {
    const calculatedResult = quantity * currency;
    setTotal(calculatedResult);
  };

  const handleBuy = () => {
    window.open(tradeUrl, "_blank");
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">
          Quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          required
        />
      </div>
      <button className="btn btn-primary" onClick={handleCalculate}>
        Calculate
      </button>
      <button className="btn btn-primary" onClick={handleBuy}>
        Buy
      </button>
      {total && (
        <div className="mt-3">
          <h4>Total</h4>
          <p>{total}</p>
        </div>
      )}
    </div>
  );
}
