import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  const roleTable = await prisma.role.findMany();
  console.log(roleTable);

  return (
    <div>
      <h1>TESTE PROTOCOLO: GET</h1>
      <ul>
        {roleTable.map((role) => (
          <li key={role.id_role}>
            <Link href={`/get/roles/${role.id_role}`}>{role.role_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
