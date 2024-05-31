import { useId } from "react";

function InputBox({ 
  className = "" ,
  value,
  onValueChange,
  inputDisabled = false,
  selectCurrency = "USD",
  onCurrencyChange,
  currencyDisabled = false,
  currencyOptions = []
}) {
  const ammountId = useId();
  const currencyId = useId();
  return (
    <div
      className={`bg-white opacity-100 flex rounded-xl p-3 text-ls font-semibold m-2 ${className}`}
    >
      <div>
        <label htmlFor={ammountId} className="text-black/40 m-1 mb-3 block">
          {selectCurrency}
        </label>
        <input type="number" min="0" className="p-2 w-80"
        id={ammountId} 
        placeholder = "Ammount"
        value={value}
        disabled = {inputDisabled}
        onChange={(e) => onValueChange && onValueChange(Number(e.target.value))}
        />
      </div>
      <div>
        <label
          htmlFor={currencyId}
          className="text-black/40 mr-1 ml-4 mb-3 block text-right"
        >
          currency type
        </label>
        <select min="0" className="p-2 ml-10"
        id={currencyId}
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled = {currencyDisabled}
        >
          <option value={selectCurrency}>{selectCurrency}</option>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
