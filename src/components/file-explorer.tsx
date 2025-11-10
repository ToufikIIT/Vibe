import path from "path";
import { Fragment, useCallback, useMemo, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Button } from "./ui/button";
import { Hint } from "./hint";
import { CopyIcon } from "lucide-react";
import CodeView from "./code-view";
import { convertFilesToTreeItems } from "@/lib/utils";

type FileCollection = { [path: string]: string };

function getLanguageFromExtension(filename: string): string {
  const extension = filename.split(".").pop()?.toLowerCase();
  return extension || "text";
}

interface FileExplorerProps {
  files: FileCollection;
}

export const FileExplorer = ({ files }: FileExplorerProps) => {
  const [selectedFiles, setSelectedFiles] = useState<string | null>(() => {
    const fileKeys = Object.keys(files);
    return fileKeys.length > 0 ? fileKeys[0] : null;
  });

  const treeData = useMemo(()=>{
    return convertFilesToTreeItems(files)
  },[files])

  const handleFileSelect = useCallback((filePath:string)=>{
    if(files[filePath]){
      setSelectedFiles(filePath);
    }
  },[files])

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={30} minSize={30} className="bg-sidebar">
        <TreeView
            data={treeData}
            value={selectedFiles}
            onSelect={handleFileSelect}
        />
      </ResizablePanel>
      <ResizableHandle className="hover:bg-primary transition-colors" />
      <ResizablePanel defaultSize={70} minSize={50}>
        {selectedFiles && files[selectedFiles] ? (
          <div className="h-full w-full flex flex-col">
            <div className="border-b bg-sidebar px-4 py-2 flex justify-between items-center gap-x-2">
              <Hint text="Copy to clipboard" side="bottom">
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto"
                  onClick={() => {}}
                  disabled={false}
                >
                  <CopyIcon />
                </Button>
              </Hint>
            </div>
            <div className="flex-1 overflow-auto">
              <CodeView 
                code={files[selectedFiles]}
                lang={getLanguageFromExtension(selectedFiles)}
              />
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Select a file to view it's content
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
