import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/components/providers/Provider";
import { Outfit } from 'next/font/google';
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "VidGenius - AI powered video generator",
  description: "VidGenius is an AI powered video creating SAAS that allows you to create videos with ease.",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.className} antialiased`}>
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
