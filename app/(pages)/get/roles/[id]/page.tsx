import { PageProps } from "@/.next/types/app/layout";
import { prisma } from "@/lib/prisma";

export default async function Page({ params }:PageProps) {

  const role = await prisma.role.findUnique({
    where: {
      id_role: params.id,
    },
  });

  return (
    <div>
      <h1>Role selected: {role?.role_name}</h1>
      <h2>Id: {role?.id_role}</h2>
    </div>
  );
}
