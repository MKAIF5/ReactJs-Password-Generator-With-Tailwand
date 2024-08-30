import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () =>
    useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz";
      if (numberAllow) {
        str = "0123456789";
      }

      if (charAllow) {
        str = "!@#$%^&*(){}[]<>|`~";
      }

      for (let i = 1; i <= array.length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass = str.charAt(char);
      }
      setPassword(pass);
    }, [length, numberAllow, charAllow, setPassword]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg mt-8 px-3 py-3
       text-orange-500 bg-slate-700
       "
      >
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder="password"
           readOnly           
          />
          <button className="outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0">Copy</button>
        </div>
      </div>
    </>
  );
}

export default App;
