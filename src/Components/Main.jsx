import CurrencyRow from "./CurrencyRow";
import { useContext } from "react";
import CurrencyContext from "../Context/Currency";

function Main() {
  const { currencyOptions } = useContext(CurrencyContext);

  console.log(currencyOptions);
  return (
    <div>
      <h1>Main</h1>
      <CurrencyRow currencyOptions={currencyOptions} />
      <div>=</div>
      <CurrencyRow currencyOptions={currencyOptions} />
    </div>
  );
}

export default Main;
