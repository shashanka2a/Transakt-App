import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Transakt - Modern Payment Solutions",
  description: "Revolutionary payment platform for the modern world. Secure, fast, and reliable transactions.",
  keywords: "payments, fintech, transactions, digital payments",
  authors: [{ name: "Transakt Team" }],
  openGraph: {
    title: "Transakt - Modern Payment Solutions",
    description: "Revolutionary payment platform for the modern world. Secure, fast, and reliable transactions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transakt - Modern Payment Solutions",
    description: "Revolutionary payment platform for the modern world. Secure, fast, and reliable transactions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
