import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Govind's Portfolio",
  description: "A Full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
