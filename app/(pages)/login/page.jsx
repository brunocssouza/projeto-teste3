/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import LoginHandler from '../../components/LoginHandler'


export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [done, setDone] = useState("hidden")
  const [message, setMessage] = useState('Não tá tendo')

  const submit = async () => {
    const user = {email: email, password: password}
    if (await LoginHandler(user)) {
      setMessage('Log-in efetuado com sucesso!')
      setDone(`visible text-green-600`)
    } else {
      setMessage('Credenciais incorretas!')
      setDone(`visible text-red-600`)
    }
  }

  return (
    <>
      <main className="min-w-full h-screen flex justify-center items-center font-sans bg-yellow-300">
        <div className="container flex flex-col shadow-lg bg-white border border-s-neutral-200 rounded w-10/12 h-2/3 md:w-6/12 lg:w-4/12 items-center justify-center font-medium break-words px-4 text-black">
          <h1 className="text-center font-bold text-4xl mb-10">LOG-IN</h1>
          <form>
            
            <label htmlFor="" className="block">
              E-mail
            </label>
            <input
              type="email"
              className="border border-s-neutral-200 shadow-lg mb-5"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="" className="block">
              Password
            </label>
            <input
              type="password"
              className="border border-s-neutral-200 shadow-lg mb-5"
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="flex justify-center"></div>
                      <button type="button" className="block text-center shadow-lg rounded bg-yellow-300 w-full h-10" onClick={submit}>
            Submit
          </button>
          <div>
            <p className={`text-center pt-5 ${done}`}>{message}</p>
          </div>
          </form>
        </div>
      </main>
    </>
  );
}
