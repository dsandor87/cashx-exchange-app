import "./App.css";
import Main from "./Components/Main";
import { CurrencyProvider } from "./Context/Currency";

function App() {
  return (
    <CurrencyProvider>
      <div className="App">
        <Main />
      </div>
    </CurrencyProvider>
  );
}

export default App;
