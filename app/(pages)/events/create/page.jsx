/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import LoginHandler from "../../../api/user/GET";

export default function Page() {
  const [eventName, setEventName] = useState("");
  const [eventCapacity, setEventCapacity] = useState(0);

  const [done, setDone] = useState("hidden");

  const submit = async () => {
    const event = { name: eventName, capacity: eventCapacity };
    if (await LoginHandler(user)) {
    } else {
    }
  };

  return (
    <>
      <main className="min-w-full h-screen flex justify-center items-center bg-yellow-300 font-sans">
        <div className="container flex flex-col shadow-lg border border-s-neutral-200 rounded w-10/12 h-2/3 md:w-6/12 lg:w-4/12 items-center justify-center font-medium break-words px-4 text-black bg-white">
          <h1 className="text-center font-bold text-4xl mb-10">Create Event</h1>
          <form>
            <label className="block" htmlFor="">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-s-neutral-200 shadow-lg mb-5"
              onChange={(event) => setEventName(event.target.value)}
            />
            <label className="block" htmlFor="">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              className="border border-s-neutral-200 shadow-lg mb-5"
              onChange={(event) => setEventCapacity(event.target.value)}
            />
            <div className="flex justify-center"></div>
            <button
              type="button"
              className="block text-center shadow-lg rounded bg-yellow-500 w-full h-10"
              onClick={submit}
            >
              Submit
            </button>
            <div>
              <p
                className={`text-green-600 text-center pt-5 ${done}`}
                id="sucessMessage"
              >
                Registrado com sucesso!
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
