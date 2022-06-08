import React from 'react';
import { useEffect, useState } from "react";
import { deleteUser, getAllUser } from "../../redux/apiRequest";
import { loginUser } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function User() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const error = useSelector(state => state.auth.login?.isError)
    const user = useSelector(state => state.auth.login?.user)
    const userList = useSelector(state => state.user.users?.allUser)

    // useEffect(() => {
    //   if(!user){
    //     navigate("/login")
    //   }
    //   else{
    //     navigate("/User")
    //   }

    //   if(user?.token){
    //     getAllUser(user.token, dispatch)
    //   }
    // },[])

    // const handleDelete = () => {
    //     if(user?.token){
    //         deleteUser(user.token,dispatch, user.id)
    //     }
    // }

    return (
    <>
    <div className="account">
        <div className="user col-sm-5">
            <div className="user-info">
                <div className="user-header"> <h5> <b>Thông tin tài khoản</b></h5></div>
                <p><b>Họ và Tên: </b></p>
                <p><b>Email: </b></p>
                <p><b>Số câu đã làm: </b></p>
                <p><b>Điểm trung bình: </b></p>
                <a href="/Login" ><div className="user-item d-flex"><li className="fa fa-sign-out"> Đăng xuất</li></div></a>
            </div>
        
        </div>
        <div className="mid col-1">
            <br></br>
        </div>
        <div className="bannerlog col-sm-5">
            <img
              src="https://cdn.glitch.global/7b4743d8-a7e2-4d18-a87b-a1248d42b7cc/logo.png?v=1653215058970" alt=""
            />
        </div>
    </div>
    </> 
    );
}

export default User;