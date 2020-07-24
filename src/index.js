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

function ListItem(props) {
  return (
    <li key={props.index}>
      <h3>
        {props.index} : {props.data.title}
      </h3>
      <p>{props.data.content}</p>
    </li>
  );
}

// 有動態事件的方式
class ListItem2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        key={this.props.index}
        onClick={(event) => {
          this.clickEvent(this.props.index, this.props.data.title, event);
        }}
      >
        <h3>
          {this.props.index} : {this.props.data.title}
        </h3>
        <p>{this.props.data.content}</p>
      </li>
    );
  }

  clickEvent = (index, title, event) => {
    alert(index + " - " + title);
  };
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "NO1 111",
          content: "11111",
        },
        {
          title: "NO2 222",
          content: "222",
        },
        {
          title: "NO3 333",
          content: "333",
        },
      ],
    };
  }

  render() {
    // 最原始方法
    // let listArr = [];
    // for(let i = 0; i < this.state.list.length; i++) {
    //   let item = (
    //     <ul>
    //       <li><h3>{this.state.list[i].title}</h3></li>
    //       <li><h5>{this.state.list[i].content}</h5></li>
    //     </ul>
    //   )

    //   listArr.push(item);
    // }

    // 使用數組 map 方法，對每一項數據進行 JSX 的形式進行加工，
    // 最終得到 1 個每一項都是 JSX 對象的數組，將數組渲染到模板。
    // Key 需要放入每一項中
    let listArr = this.state.list.map((item, index) => {
      return (
        // <li key={index}>
        //   <h3>{index} : { item.title }</h3>
        //   <p>{ item.content }</p>
        // </li>
        // <ListItem data={item} index={index} key={index} />

        <ListItem2 data={item} index={index} key={index} />
      );
    });

    return (
      <div>
        {/* 最原始方式 */}
        {/* {listArr} */}
        <ul>{listArr}</ul>
      </div>
    );
  }
}

ReactDOM.render(<Welcome />, document.querySelector("#root"));
