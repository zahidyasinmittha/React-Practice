import React from "react";
import ReactDOM from "react-dom/client";

let App = () => <h1>this is me zahid</h1>;

let Myfunc = <h1>Myfunc</h1>;

let Element = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {Element}
    {Myfunc}
  </React.StrictMode>
);
