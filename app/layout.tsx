import type { Metadata } from "next";
import { Geist, Geist_Mono, STIX_Two_Text } from "next/font/google";
import "../style/globals.css";

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
  title: "The Archivist | Retrouvez la dernière archive de n'importe quelle page web en un clic.",
  description: "The Archivist est une extension de navigateur qui permet de retrouver la dernière archive de n'importe quelle page web.",
  authors: [{ name: "Kevin Bourgitteau", url: "https://kevinbourgitteau.fr" }],
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: "The Archivist | Retrouvez la dernière archive de n'importe quelle page web en un clic.",
    description: "The Archivist est une extension de navigateur qui permet de retrouver la dernière archive de n'importe quelle page web.",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Archivist | Retrouvez la dernière archive de n'importe quelle page web en un clic.",
    description: "The Archivist est une extension de navigateur qui permet de retrouver la dernière archive de n'importe quelle page web.",
    images: "/og-image.png",
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    noarchive: true,
    nosnippet: true,
  },
  alternates: {
    canonical: "https://thearchivist.fr",
  },
  category: "technology",
  creator: "Kevin Bourgitteau",
  keywords: ["The Archivist", "archive", "browser extension", "web archive"],
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
