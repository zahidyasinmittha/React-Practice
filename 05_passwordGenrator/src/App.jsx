import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [password, setpassword] = useState("");
  const [isNumber, setisNumber] = useState(false);
  const [isCharactor, setisCharactor] = useState(false);

  let passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    if (isNumber) str += "1234567890";
    if (isCharactor) str += "!@#$%^&*()_+";

    while (password.length < length)
      password += str[Math.floor(Math.random() * str.length )];
    setpassword(password);
  }, 
  [length, isNumber, isCharactor, password]);

  let copyClipBoard = ()=> {
    // window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    document.execCommand("copy");
  }
  
  let rangeChange = function (e) {
    setlength(e.target.value);
  };

  let numberChange = function () {
    setisNumber((pre) => !pre);
  };

  let charactorChange = function (e) {
    setisCharactor(e.target.checked);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isCharactor]);

  const passwordRef = useRef(null);

  return (
    <>
      <div className="w-screen h-screen bg-slate-600">
        <div className="w-screen flex justify-center items-center absolute top-12">
          <div className="p-6 bg-black rounded-xl">
            <div>
              <input
                className=" w-96 p-3 rounded-l-xl"
                type="text"
                value={password}
                readOnly
                ref={passwordRef}
              />
              <button
                onClick={copyClipBoard}
                className="bg-blue-700 text-white font-bold text-lg p-2.5 pb-3 rounded-r-xl active:bg-red-600"
              >
                copy
              </button>
            </div>
            <div className="pt-6 flex">
              <input
                type="range"
                name="length"
                id="length"
                min="0"
                max="30"
                value={length}
                onInput={rangeChange}
              />
              <p className="text-white pl-2">Length:{length}</p>
              <input
                className="ml-2"
                type="checkbox"
                defaultChecked={isNumber}
                onChange={numberChange}
              />
              <p className="text-white pl-1">Numbers</p>
              <input
                className="ml-2"
                type="checkbox"
                defaultChecked={isCharactor}
                onInput={charactorChange}
              />
              <p className="text-white pl-1" min="0" max="30">
                Charactor
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
