"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Quill() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1 className="text-5xl m-10">This is Quil text editor</h1>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}
