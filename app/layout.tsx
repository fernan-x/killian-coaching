import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/nav";
import Footer from "@/components/section/footer";
import CookieConsent from "@/components/common/cookie-consent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fit truck - Nantes - Killian Coaching",
  description:
    "En tant que coach sportif à domicile certifié à Nantes, je propose des séances sur mesure en fonction de vos objectifs. Je me déplace avec mon Fit truck, équipé pour tout type d'entraînement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookieConsent />
        <Nav />
        <main className="flex flex-col items-center justify-between overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
