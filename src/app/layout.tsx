import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

// Navbar
import QuizzersNavbar from "@/components/lib/navbar/QuizzersNavbar";
import AuthProvider from "@/firebase/components/auth-provider";

export const metadata: Metadata = {
  title: "Quizzers",
  description: "Quiz App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} hidden h-[100vh] flex-col min-screen:flex`}
      >
        <AuthProvider>
          <QuizzersNavbar />
          {children}
        </AuthProvider>
        
        <SpeedInsights />
      </body>
    </html>
  );
}
