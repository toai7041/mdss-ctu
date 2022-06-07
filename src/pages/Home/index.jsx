import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/layout/Nav";
import Question from "../../components/question";
import Login from "../Login"
import { deleteUser, getAllUser } from "../../redux/apiRequest";

function Home() {  
    return ( 
        <div className="home">
              <Nav />
              <Question/>
        </div>
     );
}

export default Home;