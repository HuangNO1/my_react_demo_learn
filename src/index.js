import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// JSX 語法
// <App /> JS 的普通對象

// let root = document.getElementById("root");

// let app = (
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// let h1 = (
//   <div>
//     <h1>Hello World</h1>
//   </div>
// );

// ReactDOM.render(h1, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 實現頁面時刻的顯示

// function clock() {
//   let time = new Date().toLocaleTimeString();
//   let element = <h1>Current Time: { time }</h1>;
//   let root = document.querySelector('#root')
//   ReactDOM.render(element, root)
// }

// clock();

// 間隔函數
// setInterval(clock, 1000);

// react 函數式組件
// 組件開頭必須大寫
function Clock(props) {
  return (
    <h1>Current Time: { props.date.toLocaleTimeString() }</h1>
  );
}

function run() {
  // date 傳參
  ReactDOM.render(
    <Clock date={ new Date() } />,
    document.querySelector('#root')
  )
}

setInterval(run, 1000);