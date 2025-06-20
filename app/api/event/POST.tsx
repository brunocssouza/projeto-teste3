"use server";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/lib/prisma";

export default async function LoginHandler(data: {
  name: string;
  capacity: number;
}) {
    console.log("Logando...");
  const event = await prisma.event.create({
    data: {
      event_name: data.name,
      seats_capacity: data.capacity,
    }
  });


  if (event != null) {
    console.log("Logado!")
    return true
  } else {
    console.log("Problema ocorreu.")
    return false
  }
}
