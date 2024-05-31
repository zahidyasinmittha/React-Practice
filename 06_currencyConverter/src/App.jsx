import { useState } from "react";
import { InputBox } from "./component";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [ammount, setAmmount] = useState("");
  const [SelectCurrencyto, setSelectCurrencyTo] = useState("PKR");
  const [convertAmmout, setConvertedAmmount] = useState("");
  const [selectCurrencyFrom, setSelectCurrencyFrom] = useState("USD");

  let data = useCurrencyInfo(selectCurrencyFrom);
  let keys = Object.keys(data);

  function handleAmmountChange(value) {
    setAmmount(value);
  }
  function onCurrencyChange(value) {
    value = value.toUpperCase()
    setSelectCurrencyFrom(value);
  }
  function onConvertedAmountChange(value) {
    setConvertedAmmount(value);
  }
  function onConvertedCurrencyChange(value) {
    value = value.toUpperCase()
    setSelectCurrencyTo(value);
  }

  function swap() {
    setSelectCurrencyFrom(SelectCurrencyto);
    setSelectCurrencyTo(selectCurrencyFrom);
    let sammount = ammount;
    setAmmount(convertAmmout);
    setConvertedAmmount(sammount);
  }

  function convert() {
    let rate = data[SelectCurrencyto.toLowerCase()];
    let converted = (ammount * rate);
    setConvertedAmmount(converted);
  }

  return (
    <>
      <div
        className=" w-screen h-screen flex justify-center items-center flex-wrap bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="bg-white/50 rounded-lg shadow-2xl p-4">
          <InputBox
            value={ammount}
            onValueChange={handleAmmountChange}
            currencyOptions={keys}
            selectCurrency={selectCurrencyFrom}
            onCurrencyChange={onCurrencyChange}
          />
          <div className="relative w-full h-0.5">
            <button
              onClick={swap}
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-xl"
            >
              swap
            </button>
          </div>
          <InputBox
            selectCurrency={SelectCurrencyto}
            value={convertAmmout}
            onValueChange={onConvertedAmountChange}
            currencyOptions={keys}
            onCurrencyChange={onConvertedCurrencyChange}
            inputDisabled 
          />
          <button className="bg-blue-500 text-white w-full rounded-xl p-3 m-2"
            onClick={convert}
          >
            Convert {selectCurrencyFrom.toUpperCase()} to {SelectCurrencyto.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
