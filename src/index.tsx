import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import "./styles/common.scss";
import "./assets/NetflixSans_W_Rg.woff2";
import { getSubscriptCache } from "./storages/subscript";

async function main() {
  const subscript = await getSubscriptCache();

  ReactDOM.render(
    <App subscript={subscript} />,
    document.getElementById("root")
  );
}

main();
