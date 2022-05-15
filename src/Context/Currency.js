import { createContext, useEffect, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetchCurrencyInfo();
  }, []);

  const fetchCurrencyInfo = async () => {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/5a2e0602c77412052d31744a/latest/USD`
    );

    const data = await response.json();

    const options = Object.keys(data.conversion_rates);
    setCurrencyOptions(options);
  };

  return (
    <CurrencyContext.Provider value={{ currencyOptions }}>
      {children}
    </CurrencyContext.Provider>
  );
};
export default CurrencyContext;
