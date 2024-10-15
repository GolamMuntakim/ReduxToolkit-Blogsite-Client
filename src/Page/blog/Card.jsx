import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
function Card({blog}) {
  return (
    <div>
       <div className="block rounded w-full lg:flex mb-10 shadow-md p-2">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
           <img src={blog?.image} alt="" srcset="" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel> 
          <div className='p-2'>
          <h1 className='font-bold'>{blog?.title}</h1>
            <div className='flex items-center justify-start gap-4 w-full'>
            <img className='rounded-full h-10 w-10' src={blog?.authorPic}></img>
                <h1 className='font-bold'>{blog?.author}</h1>
            </div>
          </div>
            <div className='mt-4 p-2'>
               <p> {blog?.content}</p>
               <p>ags : {blog?.tags.map((tag,idx)=><span key={idx} className='mx-1 underline font-bold'>{tag}</span>)}</p>
            </div>
            </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

export default Card
