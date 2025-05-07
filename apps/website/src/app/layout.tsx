import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Voidhash - Helping developers make more money.",
  description: "We simplifying the process of settings up web and mobile payments in your app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased bg-zinc-950`}>
        {children}
      </body>
    </html>
  );
}
