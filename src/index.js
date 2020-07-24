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
// function Clock(props) {
//   return (
//     <h1>Current Time: { props.date.toLocaleTimeString() }</h1>
//   );
// }

// function run() {
//   // date 傳參
//   ReactDOM.render(
//     <Clock date={ new Date() } />,
//     document.querySelector('#root')
//   )
// }

// setInterval(run, 1000);

// style
// 駝峰命名
// style 中如果存在多個單字的屬性組合，第二個單字開始，首字母大寫。
// 可以不首字母大寫，但要換寫法
// let exampleStyle = {
//   background: "skyblue",
//   borderBottom: "1px solid red",
//   // 不用首字母大寫的方法 e.g.
//   // "background-img": "url(https...)"
// }
// let element = (
//   <div>
//     <h1 style={exampleStyle}>Hello World</h1>
//   </div>
// )

// class 在 Js 中是關鍵字，所以要改成 className
// className 和 style 等屬性不能是 string，必須是對象參數
// 不能有多個 className 或是多個 style，會被自動刪掉剩一個
// className 可以用 string 相加的方式
// let classStr = "abc"

// let element1 = (
//   <div>
//     <h1 className={"cba " + classStr}>Hello World</h1>
//   </div>
// )

// // react 中 className array 無法像 Vue 一樣可以自動拆解
// // 所以要加上 join 去做間隔
// let classArray = ['abc', 'cba'].join(" ");
// let elementArrayClass = (
//   <div>
//     {/* 在 HTML 寫註釋 */}
//     <h1 className={classArray}>Hello World</h1>
//   </div>
//   // 在 JS 寫註釋
// )

// ReactDOM.render(
//   element1,
//   document.querySelector('#root')
// )

// 類組件 - 可以定義方法
// 有事件或是動態的 使用類組件：e.g. 點擊事件
// 函數式組件是靜態組件，頂多傳參數
// 函數式組件 stateless 無生命週期
// 類組件 stateful 有生命週期
// 類組件中可以在包含組件 -> 複合組件
// class HelloWorld extends React.Component {
//   render(){
//     console.log(this)
//     return (
//       <div>
//         <h1>類組件 Hello World</h1>
//         {/* 類組件傳參 */}
//         {/* <h2>hello: {this.props.name}</h2> */}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <HelloWorld />,
//   document.querySelector('#root')
// )

// React State 相當於 Vue 的 Data
// 用類組件實現

class ClockClass extends React.Component {
  // 構造函數
  constructor(props) {
    super(props)
    // 狀態 (數據) -> View
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  render() {
    // this.state.time = new Date().toLocaleTimeString();
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    )
  }
  // 生命周期函數
  // 組件渲染完成時調用的函數
  componentDidMount() {
    setInterval(() => {
      // 錯誤的改變方式
      // this.state.time = new Date().toLocaleTimeString();
      // 正確的修改，使用 setState
      // 切勿直接修改 state 數據，直接 state 重新渲染內容，需使用 setState
      // setState 是異步
      // 通過 this.setState 修改完數據後，並不會立即修改 DOM 裡面的內容
      // react 會在這個修改函數內容所有設置改變後，統一對比虛擬 DOM 對象，然後再統一修改，提升性能
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
  }
}

ReactDOM.render(
  <ClockClass />,
  document.querySelector('#root')
)

// 不推薦的方法，因為跟組件 Dom 渲染綁在一起
// setInterval(() => {
//   ReactDOM.render(
//     <ClockClass />,
//     document.querySelector('#root')
//   )
// }, 1000)

// class Tab extends React.Component {
//   constructor(props) {
//     super(props)

//     // 設置狀態和數據
//     this.state = {
//       isActive: "",
//       strClass: ""
//     }

//     this.clickEvent = this.clickEvent.bind(this)
//   }

//   clickEvent() {
//     console.log("click event")
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.clickEvent}>content 1</button>
//         <button>content 2</button>
//         <div className="content active">
//           <h1>content 1</h1>
//         </div>
//         <div className="content">
//           <h1>content 2</h1>
//         </div>
//       </div>
//     )
//   }
// }