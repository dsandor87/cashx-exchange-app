import CurrencyRow from "./CurrencyRow";
import { useContext } from "react";
import CurrencyContext from "../Context/Currency";
import Navbar from "./Navbar";

function Main() {
  const {
    currencyOptions,
    base,
    convertTo,
    setBase,
    setConvertTo,
    fromAmount,
    toAmount,
    handleFromAmountChange,
    handleToAmountChange,
    setAmountInFromCurrancy,
  } = useContext(CurrencyContext);

  return (
    <div>
      <div>
        <div id="intro" className="bg-image vh-100 shadow-1-strong">
          <video
            style={{ minWidth: "100%", minHeight: "100%" }}
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              className="h-100"
              src="https://mdbootstrap.com/img/video/Lines.mp4"
              type="video/mp4"
            />
          </video>

          <div
            className="mask"
            style={{
              background: "linear-gradient(45deg,#1decc5b3,#5b0ed6b3)100%",
            }}
          >
            <Navbar />

            <div
              className="container d-flex align-items-center
         justify-content-center text-center h-100"
            >
              <div className="text-white">
                <h1 className="mb-3">Welcome To CashX</h1>
                <h5 className="mb-4">I'm here to help you exchange money</h5>
                <div className="row">
                  <div className="col-6">
                    <CurrencyRow
                      currencyOptions={currencyOptions}
                      selectedCurrency={base}
                      onChangeCurrency={(e) => setBase(e)}
                      amount={fromAmount}
                      onChangeAmount={handleFromAmountChange}
                      setAmountInFromCurrancy={setAmountInFromCurrancy}
                    />
                  </div>
                  <div className="col-6 ">
                    <CurrencyRow
                      currencyOptions={currencyOptions}
                      selectedCurrency={convertTo}
                      onChangeCurrency={(e) => setConvertTo(e)}
                      amount={toAmount}
                      onChangeAmount={handleToAmountChange}
                      setAmountInFromCurrancy={setAmountInFromCurrancy}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
