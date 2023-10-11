"use client";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useState, useEffect } from "react";

export default function Draft() {
  const [isMounted, setIsMounted] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <h1 className="text-4xl my-4">This is the Draft.js editor</h1>
      {isMounted && (
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          editorKey="editor"
        />
      )}
    </div>
  );
}
