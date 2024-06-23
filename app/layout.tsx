import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/nav";
import Footer from "@/components/section/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Killian Coaching - Nantes",
  description:
    "Killian Coaching. Coach à domicile sur Nantes se déplaçant avec son Fit truck.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="flex flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
