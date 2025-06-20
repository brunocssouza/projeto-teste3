/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from "react";
import GET from "../../api/user/GET";

export default function Page() {
  const [message, setMessage] = useState("")
  const [color, setColor] = useState("hidden")
  

  const submit = async (formData) => {
    if (await GET(formData)) {
      setMessage('Logado com sucesso!')
      setColor('text-green-500 visible')
    } else {
      setMessage('Credenciais incorretas')
      setColor('text-red-500 visible')
    }
  };

  return (
    <>
      <main className="min-w-full h-screen flex justify-center items-center font-sans bg-yellow-300">
        <div className="container flex flex-col shadow-lg bg-white border border-s-neutral-200 rounded w-10/12 h-2/3 md:w-6/12 lg:w-4/12 items-center justify-center font-medium break-words px-4 text-black">
          <h1 className="text-center font-bold text-4xl mb-10">LOG-IN</h1>
          <form action={submit}>
            <label htmlFor="" className="block">
              E-mail
            </label>
            <input
              type="email"
              className="border border-s-neutral-200 shadow-lg mb-5"
              name="email"
            />
            <label htmlFor="" className="block">
              Password
            </label>
            <input
              type="password"
              className="border border-s-neutral-200 shadow-lg mb-5"
              name="password"
            />
            <div className="flex justify-center"></div>
            <button
              type="submit"
              className="block text-center shadow-lg rounded bg-yellow-300 w-full h-10"
            >
              Submit
            </button>
            <div>
              <p id="result" className={`text-center pt-5 ${color}`}>{message}</p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
