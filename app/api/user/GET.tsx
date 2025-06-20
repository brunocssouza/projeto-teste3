"use server";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/lib/prisma";

export default async function LoginHandler(data: FormData) {
  try {

    const email = data.get("email")?.toString()
    const password = data.get("password")?.toString()

    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
    
    if (user && user.password === password) {
      await prisma.$disconnect();
      return true;
    }
    await prisma.$disconnect();
    return false;

  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return false;
  }
}
