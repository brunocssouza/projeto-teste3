/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="min-w-full h-screen flex justify-center items-center font-sans bg-slate-900">
        <div className="container flex flex-col shadow-lg border border-s-neutral-200 rounded w-10/12 h-2/3 md:w-6/12 lg:w-4/12 items-center justify-center font-medium break-words px-4 text-white">
          <h1 className="bg-yellow-500 text-black rounded px-5 mb-5">PAGES</h1>
          <ul>
            <li>
              <Link href="/register">SIGN-UP</Link>
            </li>
            <li>
              <Link href="/login">LOG-IN</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
