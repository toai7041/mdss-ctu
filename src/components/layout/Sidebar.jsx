import React from 'react';
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Sidebar() {

  const navigate = useNavigate()
  const user = useSelector(state => state.auth.login?.user)

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
  },[])
  
  
return (
  
<div className="sidebar-menu">

  <a href="/">
    <div className="menuitem" data-toggle="popover-hover" data-content="Trang chủ">
      <li  className="fa fa-home"></li>
    </div>
  </a>
  
  {/* <a href="/Question">
    <div className="menuitem" data-toggle="popover-hover4" data-content="Câu hỏi">
      <li  className="fa fa-question-circle"></li>
    </div>
  </a> */}
  <a href="/#">
    <div className="menuitem" data-toggle="popover-hover3" data-content="Tài liệu">
      <li  className="fa fa-book"></li>
    </div>
  </a>
 
  <a href="/User">
    <div className="menuitem" data-toggle="popover-hover2" data-content="Tài khoản">
      <li  className="fa fa-user"></li>
    </div>
  </a>
  <a href="/Introduce">
    <div className="menuitem" data-toggle="popover-hover6" data-content="Giới thiệu">
      <li  className="fa fa-info-circle"></li>
    </div>
  </a>
  {/* <a href="/login">
    <div className="menuitem" data-toggle="popover-hover5" data-content="Đăng xuất">
      <li  className="fa fa-sign-out"></li>
    </div>
  </a> */}

</div>

);
}

export default Sidebar;