import React from "react";

function CurrencyRow({ currencyOptions }) {
  return (
    <div>
      <input type="number" />
      <select>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
