import { useState } from "react";

export default function Click() {
  //let x = 0;
  const [x, setX] = useState(0);
  const [y, erre] = useState("未选中");
  function onclick() {
    let tp = x + 1;
    //setX(tp);
    erre(y === "未选中" ? "选中" : "未选中");
    console.log(x);
  }
  return (
    <>
      <button onClick={onclick}>点击</button>
      <p>{y}</p>
    </>
  );
}
