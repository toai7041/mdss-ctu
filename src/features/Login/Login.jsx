import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import { loginUser } from '../../app/apiRequest'
function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const url = URL
    const formik = useFormik({
        initialValues:{
            email:"",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required").email().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"This is not valid email format"),
            password: Yup.string().required("Required").min(8, "Must be 8 characters or more").matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,"Password should be 8 chars minimum and at least 1 number")
        }),
        onSubmit: (values) => {
            // console.log(values)
            const user = { 
                email : values.email,
                password: values.password
            }
            loginUser(dispatch, user, navigate)
        }
    })
    // console.log(formik.values)
  return (
    <div className="login" onSubmit={formik.handleSubmit}>
        <div className="login-container">
            <div className="login-container__left">
                <h3 className='login-container__left-title'>Welcome back</h3>
                <form action="#" className="login-form">
                    <input type="text" placeholder='Enter your email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <input type="password" placeholder='Enter your password' name='password' id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <button type="submit" className='login-submit'>Login</button>
                </form>
            </div>
            <div className="login-container__right">
                <img src="https://imgs.search.brave.com/DOk02l7Ed93xCEBsyXZCXVn4zinP4JVeLiGLXD5CNsU/rs:fit:1200:1200:1/g:ce/aHR0cDovL2NsaXBh/cnRtYWcuY29tL2lt/YWdlcy9zdHVkZW50/LWNsaXBhcnQtNC5w/bmc" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Login