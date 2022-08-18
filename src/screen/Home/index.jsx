// import './App.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="App-header">
          <p>THIS IS HOMEPAGE !!!</p>
          <Link to="/helloworld">
            <button className="homebtn">Hello World</button>
          </Link>
          <Link to="/login">
            <button className="homebtn">Đăng xuất</button>
          </Link>
        </div>
      </>
    );
  }
}
