/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import LoginHandler from "../../api/user/GET";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [done, setDone] = useState("hidden");

  const submit = async () => {
    const user = { email: email, password: password };
    if (await LoginHandler(user)) {
    } else {
    }
  };

  return (
    <>
      <main className="min-w-full h-screen flex justify-center items-center font-sans bg-yellow-300">
        <div className="container flex flex-col shadow-lg bg-white border border-s-neutral-200 rounded w-10/12 h-2/3 md:w-6/12 lg:w-4/12 items-center  font-medium break-words px-4 text-black py-4">
          <h1 className="text-center font-bold text-4xl">EVENTS</h1>
          <ul></ul>
        </div>
      </main>
    </>
  );
}
