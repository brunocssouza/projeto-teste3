import { PageProps } from "@/.next/types/app/layout";
import { prisma } from "@/lib/prisma";

export default async function Page({ params }: PageProps) {
  const role = await prisma.role.findUnique({
    where: {
      id_role: params.id,
    },
  });

  return (
    <div className="min-w-full h-screen flex justify-center items-center border border-pink-500 font-sans">
      <div className="container flex flex-col border border-white rounded w-10/12 h-2/3 md:w-6/12 lg:w-4/12 items-center justify-center font-medium break-words text-center px-4">
        <h1>
          Role selected:
          <span className="text-teal-400"> {role?.role_name}</span>
        </h1>
        <h1>
          Role selected:
          <span className="text-teal-400"> {role?.id_role}</span>
        </h1>
      </div>
    </div>
  );
}
