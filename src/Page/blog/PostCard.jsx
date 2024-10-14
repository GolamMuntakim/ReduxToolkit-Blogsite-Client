import { Link } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "@/redux/features/blogs/blogsSlice";


const PostCard = () => {
  const dispatch = useDispatch()
  const {blogs, isLoading, isError} = useSelector(state=> state.blogs);
  // dispatch action to get blogs 
  useEffect(()=>{
    dispatch(fetchBlogs())
  },[dispatch])
  console.log(blogs)
  return (
    <div className="w-full lg:w-2/3">
      <div className="block rounded w-full lg:flex mb-10">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>One</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Two</ResizablePanel>
        </ResizablePanelGroup>
      </div>

    </div>
  );
};

export default PostCard;