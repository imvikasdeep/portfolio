import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./layouts/header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio | Vikasdeep Chaudhary",
    description: "Welcome to my developer portfolio built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme='dark'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header></Header>
                {children}
            </body>
        </html>
    );
}
