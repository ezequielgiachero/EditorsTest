"use client";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Link from "next/link";

export default function TinyMCE() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1 className="text-5xl m-10">This is tinyMCE editor</h1>
      <p>
        This could take a bit to load, i am not providing an API key and
        it&apos;s paid
      </p>
      <Link
        className="text-xl bg-slate-50 p-2 rounded-lg text-black fixed top-2 left-2"
        href="/"
      >
        Go back
      </Link>

      <Editor
        apiKey="your-api-key"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </main>
  );
}
