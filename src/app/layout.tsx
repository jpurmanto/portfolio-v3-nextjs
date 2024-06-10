import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });
// layouts navbar

export const metadata: Metadata = {
  title: "IrfanKS | Portfolio",
  openGraph: {
    images: {
      url: "https://www.irfanks.my.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-picture.234d8074.webp&w=1920&q=75",
    },
  },
  icons: {
    icon: "/icons/favicon.ico",
  },
  authors: [
    {
      name: "Irfan Kurniawan Suthiono",
    },
  ],
  keywords:
    "Portfolio, Irfan Kurniawan Suthiono, web developer, web developer padang, web developer profesional, developer padang, it padang, jasa website padang, irfanks, irfan kurniawan suthiono, irfan web developer, irfan developer, developer react js, developer reac js di padang",
  description:
    "Personal website of Irfan Kurniawan Suthiono | Portfolio. This is the website about my self and where I share all of my projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
