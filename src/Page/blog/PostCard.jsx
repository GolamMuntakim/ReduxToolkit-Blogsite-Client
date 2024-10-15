import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/redux/features/blogs/blogsSlice";
import Card from "./Card";


const PostCard = () => {
  const dispatch = useDispatch()
  const {blogs, isLoading, isError} = useSelector(state=> state.blogs);
  // pagination
  const [currentPage , setCurrentPage] = useState(1)
  const blogsPerPage = 5
  const paginatedBlogs = blogs.slice()
  // dispatch action to get blogs 
  useEffect(()=>{
    dispatch(fetchBlogs())
  },[dispatch])
  console.log(blogs)
  return (
    <div className="w-full lg:w-2/3">
     {
      !isError && !isLoading && blogs?.length>0 ? (<div>
        {
          blogs.map((blog , index)=>{
            return <Card blog={blog} key={index}></Card>
          })
        }
      </div>) : <div>No data found</div>
     }

    </div>
  );
};

export default PostCard;