import { createSlice } from "@reduxjs/toolkit";

export const userFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

const authSlice = createSlice({
    name: "auth",
    initialState:{
        login: {
            user: userFromLocalStorage,
            isPending: false,
            isError: false,
            msg: ""
        },
        register: {
            user: null,
            isPending: false,
            isError: false,
            msg: ""
        },
        logout: {
            pending: false,
            error: false,
            success: false,
        },
        getAllUser: {
            user: null,
            pending: false,
            error: false,
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isPending = true
            state.login.isError = false
        },
        loginSuccess: (state, action) => {
            state.login.isPending =false
            state.login.user = action.payload
            state.login.isError = false
        },
        loginFail: (state) => {
            state.login.isPending =false
            state.login.isError = true
        },

        registerStart: (state) => {
            state.register.isPending = true
            state.register.isError = false
        },
        registerSuccess: (state, action) => {
            state.register.isPending =false
            state.register.user = action.payload
            state.register.isError = false
        },
        registerFail: (state) => {
            state.register.isPending =false
            state.register.isError = true
        },

        getAllUserStart : state=> {
            state.getAllUser.pending = true
        },
        getAllUserAccess: (state, action) => {
            state.getAllUser.user = action.payload
            state.getAllUser.error = false
            state.getAllUser.pending = false
        },
        getAllUserFail: state => {
            state.getAllUser.error = true
        },
        
        logoutStart: state => {
            state.logout.pending = true
        },
        logoutAccess: state => {
            localStorage.removeItem("userInfo")
            state.logout.pending = false
            state.logout.error = false
            state.logout.success = true
        },
        logoutFail: state => {
            state.logout.error =true
        }
    }

})
export const {
    loginStart,
    loginSuccess,
    loginFail,
    getAllUserAccess,
    getAllUserFail,
    getAllUserStart,
    registerAccess,
    registerFail,
    registerStart,
    logoutAccess,
    logoutFail,
    logoutStart
} = authSlice.actions
export default authSlice.reducer