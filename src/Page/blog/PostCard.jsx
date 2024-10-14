import { Link } from "react-router-dom";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"


const PostCard = () => {
    return (
        <div className="p-4 md:w-1/3">
      <ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>

      </div>
    );
};

export default PostCard;