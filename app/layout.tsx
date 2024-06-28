import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono, Source_Code_Pro } from "next/font/google";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aldinti's Portfolio",
  description: "Portfolio generado por AldintiDev",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>{children}</body>
    </html>
  );
}
