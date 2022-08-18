import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Helloworld extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="App-header">
          <p> HELLO WORLD!</p>
          <Link to="/">
            <button className="homebtn">Trang chủ</button>
          </Link>
        </div>
      </>
    );
  }
}
