import type { Metadata } from "next";
import type * as React from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bhuwan Bhatt",
    template: "%s | Bhuwan Bhatt",
  },
  description: "A modern AI and machine learning portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
