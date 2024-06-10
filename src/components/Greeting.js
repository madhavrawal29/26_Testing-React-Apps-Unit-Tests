import React, { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTestHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>abcd</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}

      <button onClick={changeTestHandler}>Change Text!</button>
    </div>
  );
}
