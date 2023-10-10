"use client";
import Link from "next/link";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Quill() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1 className="text-5xl m-10">This is CKEditor classic text editor</h1>
      <Link
        className="text-xl bg-slate-50 p-2 rounded-lg text-black fixed top-2 left-2"
        href="/"
      >
        Go back
      </Link>
      <div>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </main>
  );
}
