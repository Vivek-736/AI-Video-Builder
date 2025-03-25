import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/components/providers/Provider";
import { Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "VidGenius - An AI powered video generator",
  description: "VidGenius is an AI powered video creating SAAS that allows you to create videos with ease.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${poppins.variable} antialiased`}
        >
          <Provider>
            <ThemeProvider attribute="class" defaultTheme="dark">
              {children}
            </ThemeProvider>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
