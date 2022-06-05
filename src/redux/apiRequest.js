import axios from "axios";
import apiConfig from '../api/apiConfig'
import { loginFail, loginStart, loginSuccess, registerFail, registerStart, registerSuccess } from "./authSlice";
import { deleteUserFail, deleteUserStart, deleteUserSuccess, getUsersAccess, getUsersFail, getUsersStart, updateUserAccess, updateUserFail, updateUserStart } from "./userSlice";
import { getAllCateAccess, getAllCateFail, getAllCateStart, getAnCateAccess, getAnCateFail, getAnCateStart } from "./cateSlice";
import { getAllQuestionAccess, getAllQuestionFail, getAllQuestionStart, getAnQuestionAccess, getAnQuestionFail, getAnQuestionStart} from "./questionSlice";
export const loginUser = async(user, dispatch, navigate) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post(`${apiConfig.baseUrl}/auth/login`, user)
        dispatch(loginSuccess(res.data))
        navigate('/')
    }catch(error){
        dispatch(loginFail(error.response.data))
    }
}
export const register = async(user, dispatch, navigate) =>{
    dispatch(registerStart())
    try {
        const res = await axios.post(`${apiConfig.baseUrl}/auth/register`, user)
        dispatch(registerSuccess(res.data))
        navigate("/")
    } catch (error) {
        dispatch(registerFail(error.response.data))
    }
}

export const getAllUser = async(accessToken, dispatch) => {
    dispatch(getUsersStart())
    try {
        const res = await axios.get(`${apiConfig.baseUrl}/auth`, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(getUsersAccess(res.data))
    } catch (error) {
        dispatch(getUsersFail(error.response.data))
    }
}

export const deleteUser = async(accessToken, dispatch, id) => {
    dispatch(deleteUserStart())
    try {
        const res = await axios.delete(`${apiConfig.baseUrl}/auth/delete/${id}`, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(deleteUserSuccess(res.data))
    } catch (error) {
        dispatch(deleteUserFail(error.response.data))
    }
}

export const updateUser = async(accessToken, dispatch, id, user) => {
    dispatch(updateUserStart())
    try {
        const res = await axios.put(`${apiConfig.baseUrl}/auth/update/${id}` , user, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(updateUserAccess())
    } catch (error) {
        dispatch(updateUserFail())
    }
}

export const getAllCate = async(dispatch) => {
    dispatch(getAllCateStart())
    try {
        const res = await axios.get(`${apiConfig.baseUrl}/categories/`)
        dispatch(getAllCateAccess(res.data))
    } catch (error) {
        dispatch(getAllCateFail(error.response.data))
    }
}
export const getAnCate = async(dispatch, id) => {
    dispatch(getAnCateStart())
    try {
        const res = await axios.get(`${apiConfig.baseUrl}/categories/${id}`)
        dispatch(getAnCateAccess(res.data))
    } catch (error) {
        dispatch(getAnCateFail())
    }
}

export const getAllQuestion = async(dispatch) => {
    dispatch(getAllQuestionStart())
    try {
        const res = await axios.get(`${apiConfig.baseUrl}/question/`)
        dispatch(getAllQuestionAccess(res.data))
        console.log(res.data);
    } catch (error) {
        dispatch(getAllQuestionFail(error.response.data))
    }
}

export const getAnQuestion = async(dispatch, id) => {
    dispatch(getAnQuestionStart())
    try {
        const res = await axios.get(`${apiConfig.baseUrl}/question/${id}`)
        dispatch(getAnQuestionAccess(res.data))
    } catch (error) {
        dispatch(getAnQuestionFail())
    }
}
