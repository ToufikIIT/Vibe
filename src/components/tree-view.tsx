import { TreeItem } from "@/types";

interface TreeViewprops{
  data: TreeItem[];
  value?: string| null;
  onSelect?: (value:string)=> void;
}



const TreeView = () => {
  return (
    <div className="">TreeView</div>
  )
}

export default TreeView