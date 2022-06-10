import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCate } from '../../redux/apiRequest';
import { Link} from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

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
  const [current, setCurret] = useState("")

return (
<>
  <nav className="navbar navbar-expand-sm navbar-light bg">

    <button className="navbar-toggler tog" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h5><b>Phân loại khoa</b></h5>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">

        {cate?.map(item => (
        <div className="submenu nav-item" key={item._id} id={item._id} >
          <li className="nav-item">
            <Link to={`/cate/${item._id}`}>
             <span>{item.name}</span>
            </Link>
          </li>
        </div>
        ))}
       
            
            <div className="all">
            <select name="sort" id="sort" onClick={routeChange} defaultValue={''}>
            <option  value="">-Chọn Khoa-</option>
             {cate?.map(item => (
               <option value={`/cate/${item._id}`} key={item._id} >{item.name}</option>
               ))}   
            <option value={`/question`} >Tất cả</option>
            </select>
            </div>
            
      </ul>
    </div>
  </nav>
</>
);
}

export default Nav;