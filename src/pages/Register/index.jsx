import React from 'react'
import Input from '../../components/input'
import './register.scss'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerRequest } from '../../redux/apiRequest'
function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            username: "",
            email: "",
            password: "",
            isAdmin: "",
            role: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            email: Yup.string().email().required("Required"),
            password: Yup.string().min(8,"Must be 8 characters or more"),
            isAdmin: Yup.boolean().default(false),
            role: Yup.string().default("user")
        }),
        onSubmit: (values) =>{
            const user = {
                username : values.username,
                email: values.email,
                password: values.password,
                isAdmin: values.isAdmin,
                role: values.role
            }
            dispatch(registerRequest(user,dispatch,navigate))
        }
    })
    const arr = [
        {
            display: "username",
            type: "text"
        },
        {
            display: "email",
            type: "text"
        },
        {
            display: "password",
            type: "password"
        },
        {
            display: "isAdmin",
            type: "text"
        },
        {
            display: "role",
            type: "text"
        },
    ]
  return (
    <>
        <h3 className='register-title'>Đăng ký tài khoản</h3>
        <form action="#" className='register' onSubmit={formik.handleSubmit}>
            <Input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors.username ? <p style={{color: "red", textTransform: "capitalize", paddingBottom: "10px"}}>{formik.errors.username}</p> : null}
            <Input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            { formik.errors.email ? <p style={{color: "red", textTransform: "capitalize", paddingBottom: "10px"}}>{formik.errors.email}</p> : null}
            <Input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
            {formik.errors.password && <p style={{color: "red", textTransform: "capitalize", paddingBottom: "10px"}}>{formik.errors.password}</p>}
            <Input type="text" name="isAdmin" value={formik.values.isAdmin} onChange={formik.handleChange}/>
            {formik.errors.isAdmin && <p style={{color: "red", textTransform: "capitalize", paddingBottom: "10px"}}>{formik.errors.isAdmin}</p>}
            <Input type="text" name="role" value={formik.values.role} onChange={formik.handleChange}/>
            {formik.errors.role && <p style={{color: "red", textTransform: "capitalize", paddingBottom: "10px"}}>{formik.errors.role}</p>}
            {/* {arr.map((item,i) => (
                <>
                    <Input type={item.type} name={item.display} value={formik.values.item.display} onChange={formik.handleChange}/>
                    {formik.errors.username && <p style={{color: "red", textTransform: "capitalize", paddingBottom: "10px"}}>{formik.errors.username}</p>}
                </>
            ))} */}
            <button type="submit" className="register-submit">Đăng ký</button>
        </form>
    </>
  )
}

export default Register