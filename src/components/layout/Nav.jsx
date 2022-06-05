import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCate } from '../../redux/apiRequest';
import  {Link} from 'react-router-dom';


function Nav() {
  const cate = useSelector(state => state.cate.cates?.allCate)
  const dispatch = useDispatch()
    useEffect(() => {
      getAllCate(dispatch)
    },[])
  // console.log(cate)
return (
<>
  <nav className="navbar navbar-expand-sm navbar-light bg">

    <button className="navbar-toggler tog" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

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

        <div className="all">
          <select name="sort" id="sort">
            <option value="all">Tất cả</option>
            {cate?.map(item => (
            <option value={item.name} key={item._id}>{item.name}</option>
            ))}

          </select>
        </div>

      </ul>
    </div>
  </nav>
</>
);
}

export default Nav;