import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        login: {
            user: null,
            isPending: false,
            isError: false
        },
        register: {
            user: null,
            isPending: false,
            isError: false
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
        }
    }

})
export const {
    loginStart,
    loginSuccess,
    loginFail,
    registerFail,
    registerStart,
    registerSuccess
} = authSlice.actions
export default authSlice.reducer