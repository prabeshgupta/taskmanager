import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import UserProvider from "@/providers/UserProvider";
import { Inter } from "next/font/google";

// Load the "Inter" font with Latin subset
const inter = Inter({
  subsets: ["latin"],
});

// Metadata for the page (title and description)
export const metadata: Metadata = {
  title: "Task Management App",
  description: "Task Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Toaster position="top-center" />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
