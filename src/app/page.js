import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1 className="text-5xl m-10">Try your text editors here!</h1>
      <div className="flex gap-2">
        <Link
          className="text-xl bg-slate-50 p-2 rounded-lg text-black"
          href="/quill"
        >
          Quill
        </Link>
        <Link
          className="text-xl bg-slate-50 p-2 rounded-lg text-black"
          href="/tinymce"
        >
          tinyMCE
        </Link>
        <Link
          className="text-xl bg-slate-50 p-2 rounded-lg text-black"
          href="/ckeditor"
        >
          CKEditor
        </Link>
      </div>
    </main>
  );
}
