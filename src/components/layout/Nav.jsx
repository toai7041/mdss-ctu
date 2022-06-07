import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCate } from '../../redux/apiRequest';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";

import ReactDOM from "react-dom";
import Select from "react-select";

function Nav() {
  
  const cate = useSelector(state => state.cate.cates?.allCate)
  const dispatch = useDispatch()
  const {pathname} = useLocation() 
  let navigate = useNavigate(); 
  const routeChange = (e) =>{ 
    let path = e.target.value; 
    navigate(path);
  }
    useEffect(() => {
      getAllCate(dispatch)
    },[])

return (
<>
  <nav className="navbar navbar-expand-sm navbar-light bg">

    <button className="navbar-toggler tog" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h5><b>Phân loại khoa</b></h5>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">

        {cate?.map(item => (
        <div className="submenu nav-item" key={item._id} id={item._id} >
          <li className="nav-item">
            <Link to={`/cate/${item._id}`}>
            <a className="mnitem" href="/#"> {item.name}</a>
            </Link>
          </li>
        </div>
        ))}
       
            {pathname === "/question" || pathname === "/" ?(
            <div className="all">
            <select name="sort" id="sort" onClick={routeChange}>
             <option selected value={`/question`} >Tất cả</option>
             {cate?.map(item => (
             <option value={`/cate/${item._id}`} key={item._id} >{item.name}</option>
             ))}   
            </select>
            </div> ) 
            : 
            (<div className="all">
            <select name="sort" id="sort" onClick={routeChange}>
            <option value={`/question`} >Tất cả</option>
            {cate?.map(item => (
            <option selected value={`/cate/${item._id}`} key={item._id} >{item.name}</option>
            ))}  
            </select>
            </div>
            )}
      </ul>
    </div>
  </nav>
</>
);
}

export default Nav;