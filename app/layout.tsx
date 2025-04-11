import type { Metadata } from "next";
import { Geist, Geist_Mono, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stixTwoText = STIX_Two_Text({
  variable: "--font-stix-two-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Archivist | Retrouver la dernière archive de n'importe quelle page web",
  description: "The Archivist est une extension de navigateur qui permet de retrouver la dernière archive de n'importe quelle page web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${stixTwoText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
