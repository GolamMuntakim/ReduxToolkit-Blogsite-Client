import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './features/blogs/blogsSlice'
import blogReducer from './features/singleBlog/BlogSlice'
import filterReducer from './features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    blogs : blogsReducer,
    blog : blogReducer,
    filter : filterReducer
  },
})