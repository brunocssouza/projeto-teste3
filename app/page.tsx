/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import RegisterHandle from "./components/RegisterHandle";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

return (
  <>
    <main className="min-w-full h-screen flex justify-center items-center border border-pink-500 font-sans bg-white">
      <div className="container flex flex-col shadow-lg border border-s-neutral-200 rounded w-10/12 h-2/3 md:w-6/12 lg:w-4/12 items-center justify-center font-medium break-words px-4 text-black">
        <h1 className="text-center font-bold text-4xl mb-10">REGISTER</h1>
        <form>
          <label className="block" htmlFor="">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-s-neutral-200 shadow-lg mb-5"
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="" className="block">
            CPF
          </label>
          <input
            type="number"
            className="border border-s-neutral-200 shadow-lg mb-5"
            onChange={(event) => setCpf(event.target.value)}
          />
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
        </form>
        <button className="block text-center shadow-lg rounded bg-yellow-500 w-full h-10">
          Submit
        </button>
      </div>
    </main>
  </>
)
}
