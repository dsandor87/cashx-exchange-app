import { createContext, useEffect, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [base, setBase] = useState("GBP");
  const [convertTo, setConvertTo] = useState("USD");
  const [amount, setAmount] = useState(10);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amountInFromCurrancy, setAmountInFromCurrancy] = useState(true);

  console.log(exchangeRate);

  let fromAmount, toAmount;

  if (amountInFromCurrancy) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrancy(true);
  }

  function handleToAmountChange(e) {
    console.log(e.target.value);
    setAmount(e.target.value);
    setAmountInFromCurrancy(false);
  }

  useEffect(() => {
    fetchCurrencyInfo();
  }, []);

  function getKeyByValue(object, key) {
    return Object.values(object).find((value) => object[key] === value);
  }
  const fetchCurrencyInfo = async () => {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/5a2e0602c77412052d31744a/latest/${base}`
    );

    const data = await response.json();

    const options = Object.keys(data.conversion_rates);
    setCurrencyOptions(options);

    let conversionRates = data.conversion_rates;
    let exchangeRate = getKeyByValue(conversionRates, convertTo);
    setExchangeRate(exchangeRate);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currencyOptions,
        base,
        convertTo,
        setBase,
        setConvertTo,
        fromAmount,
        toAmount,
        handleFromAmountChange,
        handleToAmountChange,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
export default CurrencyContext;
