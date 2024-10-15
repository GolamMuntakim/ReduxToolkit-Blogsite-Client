import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/redux/features/blogs/blogsSlice";
import Card from "./Card";


const PostCard = () => {
  const dispatch = useDispatch()
  const {blogs, isLoading, isError} = useSelector(state=> state.blogs);
   // dispatch action to get blogs 
   useEffect(()=>{
    dispatch(fetchBlogs())
  },[dispatch])
  console.log(blogs)
  // pagination
  const [currentPage , setCurrentPage] = useState(1)
  console.log(currentPage)
  const blogsPerPage = 4
  const startIndex =((currentPage - 1)*blogsPerPage)
  const endIndex = currentPage * blogsPerPage
  const paginatedBlogs = blogs.slice(startIndex, endIndex);
  const handlePageChange = (nextPage) =>{
    setCurrentPage(nextPage)
  }
 
  return (
    <div className="w-full lg:w-2/3">
     {
      !isError && !isLoading && paginatedBlogs?.length>0 ? (<div>
        {
          paginatedBlogs.map((blog , index)=>{
            return <Card blog={blog} key={index} ></Card>
          })
        }
        {/* pagination */}
        <div className="flex gap-4 justify-center items-center">
          <button className="btn bg-rose-800 text-white p-2 rounded-md" onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1}>previous</button>
          <span>{currentPage}</span>
          <button className="btn bg-blue-800 text-white p-2 rounded-md" onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage=== 22}>Next</button>
        </div>
      </div>) : <div>No data found</div>
     }

    </div>
  );
};

export default PostCard;