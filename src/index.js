import React, { Children } from "react";
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
// serviceWorker.unregister();

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

// class ClockClass extends React.Component {
//   // 構造函數
//   constructor(props) {
//     super(props)
//     // 狀態 (數據) -> View
//     this.state = {
//       time: new Date().toLocaleTimeString()
//     }
//   }

//   render() {
//     // this.state.time = new Date().toLocaleTimeString();
//     return (
//       <div>
//         <h1>{this.state.time}</h1>
//       </div>
//     )
//   }
//   // 生命周期函數
//   // 組件渲染完成時調用的函數
//   componentDidMount() {
//     setInterval(() => {
//       // 錯誤的改變方式
//       // this.state.time = new Date().toLocaleTimeString();
//       // 正確的修改，使用 setState
//       // 切勿直接修改 state 數據，直接 state 重新渲染內容，需使用 setState
//       // setState 是異步
//       // 通過 this.setState 修改完數據後，並不會立即修改 DOM 裡面的內容
//       // react 會在這個修改函數內容所有設置改變後，統一對比虛擬 DOM 對象，然後再統一修改，提升性能
//       this.setState({
//         time: new Date().toLocaleTimeString()
//       })
//     }, 1000)
//   }
// }

// ReactDOM.render(
//   <ClockClass />,
//   document.querySelector('#root')
// )

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

// Props
// 父傳子組件數據，單向流動，不能子傳父
// props 可以設置默認值
// 注意：props 可以傳遞函數，props 可以傳遞父函數的元素，就可以去修改父元素的 state，從而達到傳遞數據給父元素

// 在父元素中使用 state 去控制子元素 props 的從而達到父元素數據傳遞給子元素

// class ParentCom extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isAction: true
//     }

//     // 綁定事件
//     this.changeShow = this.changeShow.bind(this)
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.changeShow}>控制子元素顯示</button>
//         <ChildrenCom isAction={this.state.isAction}/>
//       </div>
//     )
//   }

//   changeShow() {
//     this.setState({
//       isAction: !this.state.isAction
//     })
//   }
// }

// class ChildrenCom extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     let strClass = null;
//     if(this.props.isAction) {
//       strClass = 'active'
//     } else {
//       strClass = ''
//     }

//     return (
//       <div className={"content " + strClass}>
//         <h1>我是子元素</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <ParentCom />,
//   document.querySelector('#root')
// )

// 子傳父
// 調用父元素的函數從而操作子元素的數據，從而實現 子 -> 父

// class ParentCom2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       childData: null
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>子傳父的數據：{this.state.childData}</h1>
//         {/* 傳遞函式給子組件 */}
//         <ChildrenCom2 setChildData={this.setChildData}/>
//       </div>
//     )
//   }

//   setChildData = (data) => {
//     this.setState({
//       childData: data
//     })
//   }
// }

// class ChildrenCom2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       msg: "hello"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.sendData}>傳遞 hello 給父元素</button>
//         {/* 更簡單的方法 */}
//         <button onClick={ () => {this.props.setChildData('直接傳')}}>傳遞 hello 給父元素</button>
//       </div>
//     )
//   }
//   // 搞成箭頭函數
//   sendData = () => {
//     console.log(this.state.msg)
//     // 用 props 拿到父組件的函數
//     // 將子元素數據傳遞給父元素
//     this.props.setChildData(this.state.msg)
//   }
// }

// ReactDOM.render(
//   <ParentCom2 />,
//   document.querySelector('#root')
// )

// React event
// 綁定事件使用駝峰命名法
// {} 傳入一個函數，不是 String

// 原生 js 阻止默認行為時，可以直接返回 return false
// react 中，阻止默認必須使用 e.preventDefault();
// class ClickCom extends React.Component {
//   render() {
//     return (
//       <div>
//         <form action="https://www.google.com" target="_blank">
//           <button onClick={this.preventEvent}>submit</button>
//         </form>
//         {/* es6 箭頭函數 */}
//         <button
//           onClick={(e) => {
//             this.preventEvent1("msg: 123", e);
//           }}
//         >
//           submit
//         </button>
//         {/* 不使用 es6 箭頭函數傳遞多個參數的方式 */}
//         <button
//           onClick={function (e) {
//             this.preventEvent1("msg: 123", e);
//           }.bind(this)}
//         >
//           submit
//         </button>
//       </div>
//     );
//   }

//   preventEvent = (e) => {
//     console.log(e.preventDefault);
//     e.preventDefault();
//     // js 原生寫法
//     // return false
//   };

//   preventEvent1 = (msg, e) => {
//     console.log(msg);
//     // js 原生寫法
//     // return false
//   };
// }

// ReactDOM.render(<ClickCom />, document.querySelector("#root"));

// React 條件渲染

// 1. 直接通過條件運算返回要渲染的 JSX 對象
// 2. 通過條件運算得出 JSX 對象，將對象渲染到模板

// 情況一
// function UserGreet(params) {
//   return (<h1>welcome to sign in</h1>)
// }

// function UserLogin(params) {
//   return (<h1>請先登入</h1>)
// }

// class ParentCom extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isLogin: false
//     }
//   }

//   render() {
//     if(this.state.isLogin) {
//       return (<UserGreet/>)
//     } else {
//       return (<UserLogin/>)
//     }
//   }
// }

// ReactDOM.render(<ParentCom />, document.querySelector("#root"));

// 情況二
// 自己類推

// List 渲染

// let array = ["banana", "apple", "peach"];

// let arrayHTML = [<li>banana</li>, <li>apple</li>, <li>peach</li>]

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {array}
//           {arrayHTML}
//         </ul>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Welcome />, document.querySelector("#root"));

// function ListItem(props) {
//   return (
//     <li key={props.index}>
//       <h3>
//         {props.index} : {props.data.title}
//       </h3>
//       <p>{props.data.content}</p>
//     </li>
//   );
// }

// // 有動態事件的方式
// class ListItem2 extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li
//         key={this.props.index}
//         onClick={(event) => {
//           this.clickEvent(this.props.index, this.props.data.title, event);
//         }}
//       >
//         <h3>
//           {this.props.index} : {this.props.data.title}
//         </h3>
//         <p>{this.props.data.content}</p>
//       </li>
//     );
//   }

//   clickEvent = (index, title, event) => {
//     alert(index + " - " + title);
//   };
// }

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [
//         {
//           title: "NO1 111",
//           content: "11111",
//         },
//         {
//           title: "NO2 222",
//           content: "222",
//         },
//         {
//           title: "NO3 333",
//           content: "333",
//         },
//       ],
//     };
//   }

//   render() {
//     // 最原始方法
//     // let listArr = [];
//     // for(let i = 0; i < this.state.list.length; i++) {
//     //   let item = (
//     //     <ul>
//     //       <li><h3>{this.state.list[i].title}</h3></li>
//     //       <li><h5>{this.state.list[i].content}</h5></li>
//     //     </ul>
//     //   )

//     //   listArr.push(item);
//     // }

//     // 使用數組 map 方法，對每一項數據進行 JSX 的形式進行加工，
//     // 最終得到 1 個每一項都是 JSX 對象的數組，將數組渲染到模板。
//     // Key 需要放入每一項中
//     let listArr = this.state.list.map((item, index) => {
//       return (
//         // <li key={index}>
//         //   <h3>{index} : { item.title }</h3>
//         //   <p>{ item.content }</p>
//         // </li>
//         // <ListItem data={item} index={index} key={index} />

//         <ListItem2 data={item} index={index} key={index} />
//       );
//     });

//     return (
//       <div>
//         {/* 最原始方式 */}
//         {/* {listArr} */}
//         <ul>{listArr}</ul>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Welcome />, document.querySelector("#root"));

// // JS forEach 與 map

// // forEach 是對每一項的操作，會影響原來的 array
// // map 則是不會影響原來的 array 值，而是生成新的值返回給新的數組
// let arr = [1, 2, 3, 4, 5, 6]
// // 對數組直接進行循環，相當於 for，沒有返回值
// // result 不會有返回值 即使寫了 return 也是 undefined
// let result = arr.forEach((item, index, arr) => {
//   console.log(item)
//   console.log(index)
//   console.log(arr)
//   return item
// })

// console.log(result)

// // map 對數組每一項進行加工，加工完成之後返回一個新的數組
// arr.map((item, index, arr) => {
//   let str = index + item + index
//   return str;
// })

// console.log(arr)

// // filter 過濾，將想要的內容進行篩選，不想要的過濾，最終得到想要的內容

// let result2 = arr.filter((item, index) => {
//   // 通過返回 true 或是 false 進行選擇
//   // true 是要，false 是不要
//   if (item % 2 === 0) {
//     return true
//   } else {
//     return false
//   }
// })

// console.log(result2)

// // reduce 是對整個數組進行整合
// // 比如你要做一個將術組裡所有的數字進行相加
// // 將數組每一項內容整合後，返回一個內容

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let arr4 = arr2.reduce((pre, next, index) => {
//   console.log(pre)
//   console.log(next)
//   console.log(index)
//   return pre + next
// }, 0)
// // 這裡尾部的 0 是初始值，因為弟一個參數 沒有 pre

// console.log(arr4)

// // for...in...主要用於遍歷對象，不適用遍歷數組
// // for...of...可以用來遍歷數組，類數組對象，字符串，set/map, generator

// // for(key of obj) 裡面的是每一項

// let obj = {
//   name: "Huang",
//   type: "handsome",
//   content: "front end"
// }

// for(key in obj) {
//   console.log("key: " + key + ", value: " + obj[key])
// }

// // 循環每一項
// for (let item of arr2) {
//   console.log(item)
// }

// 生命週期
// 組件從實例化到最終從頁面銷毀，整個過程就是生命週期，在這生命週期中，我們有許多可以調用的方法，俗稱鉤子函數

// 三個狀態

// 1. Mounting 將組件插入到 DOM 中
// 2. Updating 將數據更新到 DOM 中
// 3. UnMounting 將組件移除 DOM

// 生命周其中的鉤子函數（方法、事件）

// ComponentWillMount  組件將要渲染
// ComponentDidMount   組件渲染完畢
// ComponentWillReceiveProps  組件將要接受 props 數據
// ShouldComponentUpdate   組件接收到新的 state 或是 props，判斷是否更新，返回布爾值
// ComponentWillUpdate   組件將要更新
// ComponentDidUpdate   組件已經更新完畢
// ComponentWillUnMount   組件將要卸載

// 可以解構
// 這樣就不用每次都寫 react.Component
// import { Component } from 'react'

// class ComLife extends Component {
//   constructor(props) {
//     super(props) // 調用繼承 Component 的 構造函數
//     this.state = {
//       msg: "hello world msg"
//     }
//     console.log("constructor 構造函數")
//   }

//   componentWillMount() {
//     // 已過時
//     // 通常用來 ajax 請求
//     // 添加動畫前的類
//     console.log("ComponentWillMount  組件將要渲染")
//   }

//   componentDidMount() {
//     // 用來渲染動畫
//     console.log("ComponentDidMount   組件渲染完畢")
//   }

//   componentWillReceiveProps() {
//     // 已過時
//     // 用來查看 props 內容是什麼
//     console.log("ComponentWillReceiveProps  組件將要接受 props 數據")
//   }

//   componentWillUpdate() {
//     // 已過時
//     console.log("ComponentWillUpdate   組件將要更新")
//   }

//   componentDidUpdate() {
//     console.log("ComponentDidUpdate   組件已經更新完畢")
//   }

//   componentWillUnmount() {
//     console.log("ComponentWillUnMount   組件將要卸載")
//   }

//   render() {
//     console.log("render 渲染函數")
//     return (
//       <div>
//         <h1>hello</h1>
//       </div>
//     )
//   }
// }

// React 插槽

// 組件中寫入內容，這些內容可以被識別和控制。React 需要自己開發支持插槽功能
// 原理：組件中寫入的 HTML，可以傳入到 props 中

// class ParentCom extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       arr: [1, 2, 3],
//     };
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>組件插槽</h1>
//         {this.props.children}
//         <ChildCom>
//           <h1 data-position="header">這是放置到頭部的內容</h1>
//           <h1 data-position="main">這是放置到主要的內容</h1>
//           <h1 data-position="footer">這是放置到尾部的內容</h1>
//         </ChildCom>
//       </div>
//     );
//   }
// }

// class ChildCom extends React.Component {
//   render() {
//     let headerCom, mainCom, footerCom;
//     this.props.children.forEach((item, index) => {
//       if (item.props["data-position"] === "header") {
//         headerCom = item;
//       } else if (item.props["data-position"] === "main") {
//         mainCom = item;
//       } else {
//         footerCom = item;
//       }
//     });
//     return (
//       <div>
//         <div className="header">{headerCom}</div>
//         <div className="main">{mainCom}</div>
//         <div className="footer">{footerCom}</div>
//       </div>
//     );
//   }
// }

// class RootCom extends React.Component {
//   render() {
//     return (
//       <ParentCom>
//         {/* 插槽 */}
//         {/* 添加 data 屬性可以傳參，data- 後面接想要取的屬性名 */}
//         <h2 data-name="a" data-index={this.state.arr[0]}>
//           子組件一
//         </h2>
//         <h2 data-name="b" data-index={this.state.arr[1]}>
//           子組件二
//         </h2>
//         <h2 data-name="c" data-index={this.state.arr[2]}>
//           子組件三
//         </h2>
//       </ParentCom>
//     );
//   }
// }

// ReactDOM.render(<RootCom />, document.querySelector("#root"));

// react 路由
// 根據不同的路徑，顯示不同的組件(內容)，React 使用庫 react-router-dom
// npm install react-router-dom

// ReactRouter 三大組件
// Router：所有路由組件的根組件(底層組件)，包裏路由規則的最外層容器
// Route：路由規則匹配組件，顯示當前規則對應的組件
// Link：路由跳轉組件

// 注意：如果要精準匹配，那麼可以在 route 上設置 exact 屬性

// react-router-dom

// 請看 App.js

// ReactDOM.render(<App />, document.querySelector("#root"));

// ReduX 類似 Vue 中用到的 VueX

// ReduX
// 解決 React 數據管理（狀態管理），用於中大型項目，數據量龐大，組件之間數據交互較多的情況下使用
// 如果你不知道是否需要使用 Redux ，那麼你就不需要用他
// * 解決組件的數據通信
// * 解決數據和交互較多的應用

// Redux 只是一種狀態管理解決方法

// store: 數據倉庫，保存數據的地方
// State: state 是一個對象，這個對象包含整個應用所需要的數據
// Action: 一個動作，觸發數據改變的方法
// Dispatch: 將動作觸發成方法
// Reducer: 是一個函數，通過獲取動作，改變數據，生成一個新的狀態，從而改變頁面

import { createStore } from "redux";

// 用於通過動作，創建新的 state
// reduce 有兩個作用，一個釋初始化數據，第二個是通過獲取動作，改變數據
const reducer = function (state = { num: 0 }, action) {
  switch (action.type) {
    case "add":
      state.num++;
      break;
    case "decrement":
      state.num--;
      break;
    default:
      break;
  }
  return { ...state }; // 相當於對象的 COPY
};

// 創建倉庫
const store = createStore(reducer);

function add() {
  // 通過倉庫的方法 dispatch 進數據修改
  // dispatch 觸發 reducer
  store.dispatch({ type: "add" });
  console.log(store.getState());
}

function decrement() {
  store.dispatch({ type: "decrement" });
  console.log(store.getState());
}

const Counter = function () {
  let state = store.getState();
  return (
    <div>
      <h1>計數數量：{state.num}</h1>

      <button onClick={add}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.querySelector("#root"));

// 監聽數據變化，重新渲染
// 當數據改變時觸發
store.subscribe(() => {
  ReactDOM.render(<Counter />, document.querySelector("#root"));
});
