import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./screen/Home";
import Login from "./screen/Login";
import NotFound from "./screen/Notfound";
import Helloworld from "./screen/Helloworld";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Helloworld" element={<Helloworld />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
