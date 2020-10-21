import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [render, setRender] = React.useState(false);

  function handleClick() {
    setRender(!render);
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click me
      </button>
      {render && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
