import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/layout/Nav";
import Question from "../../components/question";
import { deleteUser, getAllUser } from "../../redux/apiRequest";

function Home() {
    // const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.login?.user)
    const userList = useSelector(state => state.user.users?.allUser)
    const navigate = useNavigate()
    useEffect(() => {
      if(!user){
        navigate("/login")
      }
      if(user?.token){
        getAllUser(user.token, dispatch)
      }
    },[])
    // console.log(userList)

    const handleDelete = () => {
        if(user?.token){
            deleteUser(user.token,dispatch, user.id)
        }
    }
    return ( 
        <div className="home">
          <Nav />
          <Question/>
        </div>
     );
}

export default Home;