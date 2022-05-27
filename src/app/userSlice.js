import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            user: null,
            pending: false,
            error: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.user.pending= true
        },
        loginSuccess: (state, action) => {
            state.user.pending= false
            state.user.user = action.payload
            state.user.error =false
        },
        loginFail: (state, action) => {
            state.user.error =true
        }
    }
})

export const {
    loginFail,
    loginStart,
    loginSuccess
} = userSlice.actions

export default userSlice.reducer