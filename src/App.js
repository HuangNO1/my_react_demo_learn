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

function Home(params) {
  return (
    <div>
      <h1>admin首頁</h1>
    </div>
  );
}

function Me(params) {
  console.log(params);
  return (
    <div>
      <h1>admin個人頁面</h1>
    </div>
  );
}

function Product(params) {
  return (
    <div>
      <h1>admin產品頁面</h1>
    </div>
  );
}

function News(params) {
  console.log(params)
  return (
    <div>
      新聞頁
      新聞 id: {params.match.params.id}
    </div>
  )
}

class App extends React.Component {
  render() {
    // 這裡的 search 是 query string
    // 可以傳 state
    let meObj = {
      pathname: "/me", // 路徑
      search: "?username=admin", // get 請求參數
      hash: "#abc", // 設置 hash 錨值
      state: { msg: "helloWorld" }, // 傳入組件的數據
    };
    return (
      <div id="app">
        {/* 全局 */}
        <div>所有頁面都顯示的內容</div>
        {/* Router 可以在一個組件中寫多個 */}
        {/* <Router>
          <Route path="/" exact component={() => (<div>首頁</div>)}></Route>
          <Route path="/me" component={() => (<div>me</div>)}></Route>
          <Route path="/product" component={() => (<div>product</div>)}></Route>
        </Router> */}

        {/* Router 設置基礎路徑 basename */}
        <Router basename="/admin">
          <div className="nav">
            <Link to="/">首頁</Link>
            <Link to="/product">產品</Link>
            {/* Link 可以設置 to 屬性進行頁面跳轉，to 屬性可以直接寫路徑的字符串，也可以通過 1 個對象，進行路進的配置 */}
            {/* replace 屬性 將新地址制換成歷史訪問紀錄的原地址 */}
            <Link to={meObj} replace>個人中心</Link>
            {/* 動態路由 */}
            <Link to="/news/456789">news</Link>
          </div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product" exact component={Product}></Route>
          <Route path="/me" exact component={Me}></Route>
          {/* 動態路由 */}
          <Route path="/news/:id" component={News}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
