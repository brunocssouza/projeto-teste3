"use server";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/lib/prisma";

export default async function LoginHandler(data: {
  email: string;
  password: string;
}) {
    console.log("Logando...");
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
      password: data.password,
    },
  });

  if (user != null) {
    console.log("Logado!")
    return true
  } else {
    console.log("Problema ocorreu.")
    return false
  }
  
}
