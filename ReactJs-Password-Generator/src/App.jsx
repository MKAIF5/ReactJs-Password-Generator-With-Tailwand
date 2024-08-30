import { useCallback, useState } from "react";
import "./App.css";

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
        pass = str.charAt(char)
      }
      setPassword(pass)
    }, [length, numberAllow, charAllow, setPassword]);

  return (
    <>
      <h1 className="text-white text-center text-5xl mt-3">
        Password Generator
      </h1>
    </>
  );
}

export default App;
