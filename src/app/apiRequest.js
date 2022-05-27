import { loginFail, loginStart, loginSuccess } from "./userSlice"
import axios from 'axios'
import { URL} from './Url'

export const loginUser = async(dispatch, user, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post(`${URL}/auth/login` , user)
        navigate("/")
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail(error.response.data))
    }
}