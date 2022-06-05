import React, { useState } from 'react'
import Input from '../../components/input'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import './login.scss'
import { loginUser } from '../../redux/apiRequest'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const error = useSelector(state => state.auth.login?.isError)
    
    const formik = useFormik({
      initialValues:{
          email:"",
          password: ""
      },
      validationSchema: Yup.object({
          email: Yup.string().email().required(" "),
          password: Yup.string().min(8, "").required(" ")
      }),

      onSubmit: (values) => {
          const user = {
              email: values.email,
              password: values.password
          }
          loginUser(user,dispatch, navigate)
          // console.log(user)
      }
  })
  // console.log(formik.values)
 
  return (
    <>
    <div className="account-page">
        <div className="row">
        
          <div className="form-container col-sm-5" >
           
            <div className="title-log"><h5>Đăng nhập tài khoản</h5></div>

            <form action="#" method="post" className="login" onSubmit={formik.handleSubmit}>
              <Input
                className="log"
                name="email"
                id=""
                type="text"
                placeHolder=""
                value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                  {formik.errors.email  ? <p >{formik.errors.email}</p> : ""}
              <Input
                className="log"
                name="password"
                id=""
                type="password"
                placeHolder=""
                value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.errors.password ? <p >{formik.errors.password}</p> : ""}
              <button name="dangnhap" type="submit" className="btn1 login-submit">
                Đăng nhập
              </button>
              <div>
                <a href="/#">Quên mật khẩu?</a>
              </div>
            </form>
          </div>
          <div className="mid col-sm-1">
            <br></br>
          </div>
          <div className="bannerlog col-sm-5">
            <img
              src="https://cdn.glitch.global/7b4743d8-a7e2-4d18-a87b-a1248d42b7cc/logo.png?v=1653215058970" alt=""
            />
          </div>
        </div>
      </div>
      </>
  
  )
}

export default Login