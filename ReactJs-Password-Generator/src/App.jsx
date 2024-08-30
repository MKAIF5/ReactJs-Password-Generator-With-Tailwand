import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {};
  return (
    <>
      <h1 className="text-white text-center text-5xl mt-3">
        Password Generator
      </h1>
    </>
  );
}

export default App;
