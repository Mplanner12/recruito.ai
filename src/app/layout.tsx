import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recruito AI: Revolutionize Your Hiring Process",
  description:
    "Automate and optimize your hiring with Recruito AI. Source, screen, and interview candidates with AI-powered tools. Find the perfect talent faster.",
  keywords:
    "recruitment, AI, hiring, automation, talent acquisition, candidate sourcing, video interviews, resume screening, HR tech, artificial intelligence",
  openGraph: {
    title: "Recruito AI: Revolutionize Your Hiring Process",
    description:
      "Automate and optimize your hiring with Recruito AI. Source, screen, and interview candidates with AI-powered tools. Find the perfect talent faster.",
    url: "https://recruito-ai-omega.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/recruito-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
