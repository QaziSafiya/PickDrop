import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Nav from "./Nav";
import Home from "./Home";
import Analytics from "./Analytics";
import Trending from "./Trending";
import Referal from "./Referal";
import Footer from "./Footer";
import Triks from "./Triks";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Home />
    <Analytics />
    <Trending />
    <Referal />
    <Triks />
    <Footer />
    {/* hello */}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
