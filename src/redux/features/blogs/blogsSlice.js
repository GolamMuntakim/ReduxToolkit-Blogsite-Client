import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsApi";
// initial state 
const initialState = {
    blogs: [],
    isLoading : false,
    isError : false ,
    error : ""
}
// async thunk for fetch data 
const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async()=>{
    const blogs = await getBlogs()
    return blogs
})
const blogsSlice = createSlice({
    name : "blogs",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchBlogs.pending, (state)=>{

        })
    }
})