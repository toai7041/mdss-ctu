import React from 'react';
import { Link, NavLink } from "react-router-dom";


function Sidebar_bot() {
  
return (
  
<div className="sidebar-menu-bot" id="visible2">
<div className="navbar navbar-expand-sm">
<ul  className="menu-aside2">

  <li className="menu-item2">
  <NavLink
    activeClassName="active"
    className="menuitem2"
    to="/"
    exact={true} 
    data-toggle="popover-hover">
      <i  className="fas fa-home"></i>
  </NavLink>
  </li>

  <li className="menu-item2">
  <NavLink
    activeClassName="active"
    className="menuitem2"
    to="/Document"
    exact={true} 
    data-toggle="popover-hover3">
    <i  className="fas fa-book"></i>
  </NavLink>
  </li>

  <li className="menu-item2">
  <NavLink
    activeClassName="active"
    className="menuitem2"
    to="/User"
    exact={true} 
    data-toggle="popover-hover2">
      <i  className="fas fa-user"></i>
  </NavLink>
  </li>

  <li className="menu-item2">
  <NavLink
    activeClassName="active"
    className="menuitem2"
    to="/Introduce"
    exact={true} 
    data-toggle="popover-hover4">
      <i className="fas fa-info-circle"></i>
  </NavLink>
  </li>

</ul>

{/* <a href="/Question">
  <div className="menuitem2" data-toggle="popover-hover4" data-content="Câu hỏi">
    <li  className="fa fa-question-circle"></li>
  </div>
</a> */}
</div>
</div>

);
}

export default Sidebar_bot;