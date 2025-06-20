"use server";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/lib/prisma";

export default async function RegisterHandler(user: {
  name: string;
  cpf: number;
  email: string;
  password: string;
}) {
  try {
    console.log("Registrando...");
    await prisma.user.create({
      data: {
        user_name: user.name,
        cpf: user.cpf,
        email: user.email,
        password: user.password,
      },
    });
    console.log("Registrado");
    return true;
  } catch {
    return false;
  }
}
