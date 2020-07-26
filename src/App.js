import React from "react";
import logo from "./logo.svg";
import "./App.css";

// 函數式組件
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// react-router

// hash 模式
// as 是取別名
// import { HashRouter as router, Link, Route } from 'react-router-dom'

// History 模式 / 後端匹配使用
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// function Home(params) {
//   return (
//     <div>
//       <h1>admin首頁</h1>
//     </div>
//   );
// }

// function Me(params) {
//   console.log(params);
//   return (
//     <div>
//       <h1>admin個人頁面</h1>
//     </div>
//   );
// }

// function Product(params) {
//   return (
//     <div>
//       <h1>admin產品頁面</h1>
//     </div>
//   );
// }

// function News(params) {
//   console.log(params)
//   return (
//     <div>
//       新聞頁
//       新聞 id: {params.match.params.id}
//     </div>
//   )
// }

// class App extends React.Component {
//   render() {
//     // 這裡的 search 是 query string
//     // 可以傳 state
//     let meObj = {
//       pathname: "/me", // 路徑
//       search: "?username=admin", // get 請求參數
//       hash: "#abc", // 設置 hash 錨值
//       state: { msg: "helloWorld" }, // 傳入組件的數據
//     };
//     return (
//       <div id="app">
//         {/* 全局 */}
//         <div>所有頁面都顯示的內容</div>
//         {/* Router 可以在一個組件中寫多個 */}
//         {/* <Router>
//           <Route path="/" exact component={() => (<div>首頁</div>)}></Route>
//           <Route path="/me" component={() => (<div>me</div>)}></Route>
//           <Route path="/product" component={() => (<div>product</div>)}></Route>
//         </Router> */}

//         {/* Router 設置基礎路徑 basename */}
//         <Router basename="/admin">
//           <div className="nav">
//             <Link to="/">首頁</Link>
//             <Link to="/product">產品</Link>
//             {/* Link 可以設置 to 屬性進行頁面跳轉，to 屬性可以直接寫路徑的字符串，也可以通過 1 個對象，進行路進的配置 */}
//             {/* replace 屬性 將新地址制換成歷史訪問紀錄的原地址 */}
//             <Link to={meObj} replace>個人中心</Link>
//             {/* 動態路由 */}
//             <Link to="/news/456789">news</Link>
//           </div>
//           <Route path="/" exact component={Home}></Route>
//           <Route path="/product" exact component={Product}></Route>
//           <Route path="/me" exact component={Me}></Route>
//           {/* 動態路由 */}
//           <Route path="/news/:id" component={News}></Route>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;

// 重定向組件
// 如果訪問某個組件時，如果有重定向組件，那麼就會修改頁面路徑，使得頁面內容顯示為所定向路徑的內容

// Switch 組件
// 讓 Switch 組件內容的 Route 只匹配一個，只要匹配到了，剩餘的規則就不再匹配

import { Redirect, Switch } from "react-router-dom";

function LoginInfo(params) {
  // params.loginSuccess = 'success'
  // params.loginSuccess = 'fail
  if (params.location.state.loginState === "success") {
    return (
      // 重定向組件
      <Redirect to="/admin"></Redirect>
    );
  } else {
    return <Redirect to="/login"></Redirect>;
  }
}

let formCom = () => {
  let pathObj = {
    pathname: "/loginInfo",
    state: {
      loginState: "success",
    },
  };
  return (
    <div>
      <h1>表單驗證</h1>
      <Link to={pathObj}>登入後表單驗證</Link>
    </div>
  );
};

class ChildCom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>跳轉到首頁</button>
      </div>
    );
  }

  clickEvent = () => {
    console.log(this.props);
    // 可以傳值
    // this.props.history.push("/", {msg: "這是由 ChildCom 發給首頁的數據"})
    // this.props.history.replace("/", {msg: "這是由 ChildCom 發給首頁的數據"})

    // 前進
    this.props.history.go(1);
    this.props.history.goForward();
    // 後退
    this.props.history.go(-1);
    this.props.history.goBack();
  };
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component={(props) => {
                console.log(props);
                return <h1>首頁</h1>;
              }}
            ></Route>
            <Route path="/form" exact component={formCom}></Route>
            <Route
              path="/login"
              exact
              component={() => <h1>登入頁</h1>}
            ></Route>
            <Route path="/loginInfo" exact component={LoginInfo}></Route>
            <Route path="/admin" exact component={() => <h1>Admin</h1>}></Route>

            {/* Router 會全部匹配，所以如果有兩個相同的 path 會兩個都匹配 */}
            {/* 所以需要用到 Switch 去匹配，匹配到一個成功就不會繼續匹配 */}
            <Route path="/abc" exact component={() => <h1>abc1</h1>}></Route>
            <Route path="/abc" exact component={() => <h1>abc2</h1>}></Route>
            <Route path="/child" exact component={ChildCom}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
