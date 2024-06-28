import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono, Source_Code_Pro, Montserrat_Alternates } from "next/font/google";

const sourceFont = Montserrat_Alternates({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aldinti's Portfolio",
  description: "Portfolio generado por AldintiDev",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={sourceFont.className}>{children}</body>
    </html>
  );
}
