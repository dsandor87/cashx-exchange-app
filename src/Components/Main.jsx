import CurrencyRow from "./CurrencyRow";
import { useContext } from "react";
import CurrencyContext from "../Context/Currency";

function Main() {
  const { currencyOptions, base, convertTo, setBase, setConvertTo } =
    useContext(CurrencyContext);

  console.log(currencyOptions);
  return (
    <div>
      <h1>Main</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={base}
        onChangeCurrency={(e) => setBase(e.target.value)}
      />
      <div>=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={convertTo}
        onChangeCurrency={(e) => setConvertTo(e.target.value)}
      />
    </div>
  );
}

export default Main;
