import type { Metadata } from "next";
import '@/app/globals.css';


export const metadata: Metadata = {
  title: "GET Teste",
  description: "GET Teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
