import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = ()=>{
  // const navigate = useNavigate()
  const user = useSelector(state => state.auth.login?.user)

  // useEffect(() => {
  //   if(!user){
  //     navigate("/Login")
  //   }
  //   else{
  //     navigate("/")
  //   }
  // },[])

    return ( 
        <div className="header" id="visible">
        <div className="info">
          <h5><b>HỆ THỐNG HỖ TRỢ CHẨN ĐOÁN Y KHOA</b></h5>
          {user?(
            <p className="header-user"><b>Hi, <span>{user.username}</span></b></p>
          ):""} 
        </div>
       
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Tìm kiếm" />
          <button type="button" className="btn btn-primary">
            <i className="fa fa-search"> </i>
          </button>
        
        </div>

      </div>
    
     );
}

export default Header;