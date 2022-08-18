import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="App-header">
        <div className="row">
          <h4 className="text-center ">Page Not Found</h4>
        </div>
        <Link to="/">
          <button className="homebtn">Trang chủ</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
