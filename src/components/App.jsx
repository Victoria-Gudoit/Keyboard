import { useState } from "react";
import { KeyboardButton } from "./KeyboardButton";

export function App() {
  const [input, setInput] = useState("");
  const [upperCase, setUpperCase] = useState(false);
  const [language, setLanguage] = useState(false);

  const alphabet = () => {
    if (language) {
      return new Array(26)
        .fill(1072)
        .map((n, index) => String.fromCharCode(n + index));
    } else {
      return new Array(26)
        .fill(97)
        .map((n, index) => String.fromCharCode(n + index));
    }
  };

  const numbers = [...new Array(10)].map((_, i) => i);

  const spaceHandler = () => {
    setInput((prevState) => {
      return prevState + " ";
    });
  };

  return (
    <div className="App">
      <input value={input} onChange={({ target }) => setInput(target.value)} />
      {numbers.map((number) => {
        return (
          <button onClick={() => setInput((prevState) => prevState + number)}>
            {number}
          </button>
        );
      })}
      {alphabet().map((letter) => {
        return (
            <KeyboardButton
              keyboardButtonValue={
                upperCase === true ? letter.toUpperCase() : letter
              }
              handleClick={({target}) => setInput((prevState) => prevState + target.value)}
            />
        );
      })}
      <KeyboardButton
        keyboardButtonValue="Caps Lock"
        handleClick={() => setUpperCase((prevState) => !prevState)}
      />
      <KeyboardButton keyboardButtonValue="Space" handleClick={spaceHandler} />
      <KeyboardButton
        keyboardButtonValue="Delete"
        handleClick={() =>
          setInput((prevState) => prevState.substring(0, prevState.length - 1))
        }
      />
      <KeyboardButton
        keyboardButtonValue="Clear all"
        handleClick={() => setInput("")}
      />
      <KeyboardButton
        keyboardButtonValue="Language"
        handleClick={() => setLanguage((prevState) => !prevState)}
      />
    </div>
  );
}
