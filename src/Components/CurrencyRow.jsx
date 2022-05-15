import React from "react";

function CurrencyRow({ currencyOptions, selectedCurrency, onChangeCurrency }) {
  return (
    <div>
      <input type="number" />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
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
