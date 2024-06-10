import React, { useState } from "react";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTestHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>abcd</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}

      <button onClick={changeTestHandler}>Change Text!</button>
    </div>
  );
}
