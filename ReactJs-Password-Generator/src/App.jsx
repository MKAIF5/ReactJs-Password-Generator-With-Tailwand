import { useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) {
      str += "0123456789";
    }

    if (charAllow) {
      str += "!@#$%^&*(){}[]<>|`~";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg mt-8 px-3 py-3 text-orange-500 bg-slate-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder="password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={() => {
              navigator.clipboard.writeText(password);
            }}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(event) => {
                setLength(Number(event.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllow}
              id="characterInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
