import React from "react";
import {
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import getSymbolFromCurrency from "currency-symbol-map";
import CurrencyFullName from "./CurrencyFullName";
import CurrencyFlag from "react-currency-flags";

function CurrencyRow({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) {
  return (
    <div>
      <InputGroup className="mb-3">
        <DropdownButton
          id="dropdown-menu-align-right"
          onSelect={onChangeCurrency}
          variant="outline-secondary"
          title={selectedCurrency}
          align="end"
        >
          {currencyOptions.map((option) => (
            <Dropdown.Item key={option} eventKey={option}>
              <div className="d-flex flex-row">
                <div className="p-2">
                  <CurrencyFlag currency={option} size="lg" />
                </div>
                <CurrencyFullName option={option} />
              </div>
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <InputGroup.Text>
          {getSymbolFromCurrency(`${selectedCurrency}`)}
        </InputGroup.Text>

        <FormControl
          value={amount}
          min={0}
          type="number"
          onChange={onChangeAmount}
          aria-label="Text input with dropdown button"
        />
      </InputGroup>
    </div>
  );
}

export default CurrencyRow;
