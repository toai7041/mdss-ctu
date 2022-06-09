import React from 'react';
import { Link, NavLink } from "react-router-dom";


function Sidebar() {
  
return (
  
<div className="sidebar-menu">

<ul  className="menu-aside">

  <li className="menu-item">
  <NavLink
    activeClassName="active"
    className="menuitem"
    to="/"
    exact={true} 
    data-toggle="popover-hover" data-content="Trang chủ">
      <i  className="fas fa-home"></i>
  </NavLink>
  </li>

  <li className="menu-item">
  <NavLink
    activeClassName="active"
    className="menuitem"
    to="/Document"
    exact={true} 
    data-toggle="popover-hover3" data-content="Tài liệu">
    <i  className="fas fa-book"></i>
  </NavLink>
  </li>

  <li className="menu-item">
  <NavLink
    activeClassName="active"
    className="menuitem"
    to="/User"
    exact={true} 
    data-toggle="popover-hover2" data-content="Tài khoản">
      <i  className="fas fa-user"></i>
  </NavLink>
  </li>

  <li className="menu-item">
  <NavLink
    activeClassName="active"
    className="menuitem"
    to="/Introduce"
    exact={true} 
    data-toggle="popover-hover4" data-content="Giới thiệu">
      <i className="fas fa-info"></i>
  </NavLink>
  </li>

</ul>

{/* <a href="/Question">
  <div className="menuitem" data-toggle="popover-hover4" data-content="Câu hỏi">
    <li  className="fa fa-question-circle"></li>
  </div>
</a> */}
</div>

);
}

export default Sidebar;