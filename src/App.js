import "./styles.css";
import { useState } from "react";
export default function App() {
  let x = 1;
  const [menu, setMenu] = useState(1);
  function qiehuan() {
    setMenu(2);
  }
  if (menu === 1) {
    return (
      <div className="App">
        <button onClick={qiehuan}>切换</button>
        <h1>Hello CodeSandbox {add(x)}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  } else {
    return (
      <div className="App">
        <button onClick={qiehuan}>切换</button>
        <h2>2</h2>
      </div>
    );
  }
}

function add(x) {
  return ++x;
}
