import React from 'react'




function Sidebar_bot() {


return (
  
<div className="sidebar-menu-bot">
<div className="navbar navbar-expand-sm">
  
 
  <a href="/Question" >
    <div className="menuitem2" data-toggle="popover-hover4" data-content="Câu hỏi">
      <li  className="fa fa-question"></li>
    </div>
  </a>
  <a href="/#">
    <div className="menuitem2" data-toggle="popover-hover3" data-content="Tài liệu">
      <li  className="fa fa-book"></li>
    </div>
  </a>
  <a href="/">
    <div className="menuitem2" data-toggle="popover-hover" data-content="Trang chủ">
      <li  className="fa fa-home"></li>
    </div>
  </a>
  {/* <a href="/Introduce" >
    <div className="menuitem2" data-toggle="popover-hover6" data-content="Giới thiệu">
      <li  className="fa fa-info"></li>
    </div>
  </a> */}
  <a href="/#">
    <div className="menuitem2" data-toggle="popover-hover2" data-content="Tài khoản">
      <li  className="fa fa-user"></li>
    </div>
  </a>
  <a href="/#">
    <div className="menuitem2" data-toggle="popover-hover5" data-content="Đăng xuất">
      <li  className="fa fa-sign-out"></li>
    </div>
  </a>
  </div>
</div>


  
);
}

export default Sidebar_bot;