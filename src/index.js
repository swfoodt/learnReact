import { createRoot } from "react-dom/client";

import App from "./App";
import Wcy from "./Wcy";
import Click from "./Click";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let flag = 1;

root.render(
  <>
    <App />
    <Click />
    <p>根内容 {flag}</p>
    <Wcy />
  </>
);
