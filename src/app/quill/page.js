"use client";
import Link from "next/link";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Quill() {
  const [value, setValue] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1 className="text-5xl m-10">This is Quil text editor</h1>
      <Link
        className="text-xl bg-slate-50 p-2 rounded-lg text-black fixed top-2 left-2"
        href="/"
      >
        Go back
      </Link>
      <div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </main>
  );
}
