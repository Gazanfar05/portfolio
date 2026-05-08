import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from './components/ui/Cursor';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gazanfar Moin | CSE Student, Full Stack, Blockchain & AI/ML",
  description: "Futuristic interactive portfolio for Gazanfar Moin, a Computer Science Engineering student focused on AI/ML, blockchain, AR/VR, and immersive digital experiences.",
  keywords: "Gazanfar Moin, computer science engineering, full stack developer, blockchain developer, AI ML, AR VR, portfolio",
  authors: [{ name: "Gazanfar Moin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
