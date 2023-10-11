"use client";
import React, { useRef } from "react";
import Link from "next/link";

export default function EditorsLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <Link
        className="text-xl bg-slate-50 p-2 rounded-lg text-black fixed top-2 left-2"
        href="/"
      >
        Go back
      </Link>

      {children}
    </main>
  );
}
