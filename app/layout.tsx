import { ThemeProvider } from "@/components/theme-provider";
import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { CartProvider } from "@/contexts/cart-context";
import { Toaster } from "@/components/ui/toaster";
// import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnWorks - Learn Skills & Find Work Opportunities",
  description:
    "An e-learning platform that combines high-quality courses with real job opportunities.",
};
// interface Messages {
//   greeting: string;
//   welcome: string;
// }
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const locale = params?.locale || "en";
  // const messages = (await import(`../messages/${locale}.json`)).default as Messages;
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
