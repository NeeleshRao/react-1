import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCEDFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*{}:?";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  return (
    <div className="grid grid-rows-3 justify-center py-5">
      <div className="content-center justify-self-center">
        <h1 className="text-5xl font-bold text-white">Password Generator</h1>
      </div>

      <div className="grid grid-cols-2 bg-gray-900 gap-x-3 py-3 px-3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="bg-red-700">
          Copy
        </button>
      </div>
      <div className="bg-gray-700 gap-x-3 py-3 px-3 text-white">
        <div>
          <input
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            type="range"
            min={6}
            max={75}
            name=""
            value={length}
            id=""
            onChange={(event) => setLength(event.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
