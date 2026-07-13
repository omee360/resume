import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AmbientCode } from "@/components/layout/ambient-code";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umairdev.com"),
  title: {
    default: "Umair Haider Hashmi | Full-Stack Web Developer",
    template: "%s | Umair Haider Hashmi",
  },
  description:
    "Umair Haider Hashmi is a full-stack web developer building professional websites and web applications with JavaScript, React, Next.js, TypeScript, WordPress, and practical backend fundamentals.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Umair Haider Hashmi | Full-Stack Web Developer",
    description:
      "Professional full-stack websites and web applications with React, Next.js, TypeScript, WordPress, and maintainable website systems for real business use.",
    url: "/",
    siteName: "Umair",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <AmbientCode />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
