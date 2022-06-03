import { createSlice } from "@reduxjs/toolkit";

export const cateSlice = createSlice({
    name: "cate",
    initialState:{
        cates: {
            allCate: null,
            pending: false,
            error: null
        },
        cate: {
            cate: null,
            pending: false,
            error: false
        },
        msg: ""
    },
    reducers:{
        getAllCateStart: (state) => {
            state.cates.pending = true
        },
        getAllCateAccess: (state, action) => {
            state.cates.allCate =  action.payload
            // [
            //     ...new Set([...state.cates.allCate, ...action.payload]),
            // ];
            state.cates.error = false
            state.cates.pending = false
        },
        getAllCateFail: (state, action) =>{
            state.cates.error = true
            state.msg = action.payload
        },
        
        getAnCateStart: (state) => {
            state.cate.pending = true
        },
        getAnCateAccess: (state, action) => {
            state.cate.cate = action.payload
            state.cate.pending = false
            state.cate.error = false
        },
        getAnCateFail: (state) => {
            state.cate.error = true
        }
    }
})

export const {
    getAllCateAccess,
    getAllCateFail,
    getAllCateStart,

    getAnCateAccess,
    getAnCateFail,
    getAnCateStart
} = cateSlice.actions

export default cateSlice.reducer