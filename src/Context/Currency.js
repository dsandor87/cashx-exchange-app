import { createContext, useEffect, useState } from "react";

const CurrencyContext = createContext();

export const CurrancyProvider = ({ children }) => {
  return (
    <CurrencyContext.Provider value={{}}>{children}</CurrencyContext.Provider>
  );
};
export default CurrencyContext;
