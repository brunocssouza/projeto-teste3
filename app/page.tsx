/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/lib/prisma";
import RegisterForm from "./components/RegisterForm";

export default function Page() {
  async function POST(
    name: string,
    cpf: number,
    email: string,
    password: string
  ) {
    const users = await prisma.user.create({
      data: {
        user_name: name,
        cpf: cpf,
        email: email,
        password: password,
      },
    });
  }

  return (
    <main className="min-w-full h-screen flex justify-center items-center border border-pink-500 font-sans bg-white">
      <div className="container flex flex-col shadow-lg border border-s-neutral-200 rounded w-10/12 h-2/3 md:w-6/12 lg:w-4/12 items-center justify-center font-medium break-words px-4 text-black">
        <RegisterForm></RegisterForm>

      </div>
    </main>
  );
}
