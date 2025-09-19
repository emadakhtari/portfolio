import type { Metadata } from "next";
import { ThemeProvider } from "@/components/elements/themes/theme-provider";
import ThemeToggle from "@/components/elements/themes/theme-toggle";
import RightMenu from "@/components/elements/right-menu";
import BottomMenu from "@/components/elements/bottom-menu";
import { TOKENS } from "@/theme";
import PageTransition from "../components/ui/page-transition";
import "./globals.css";


export const metadata: Metadata = {
  title: "Emad Akhtari",
  description: "Personal portfolio built with Next.js, Tailwind & Radix UI",
  icons: {
    icon: "/favicon.ico",         // default
    shortcut: "/favicon.png",     // optional
    apple: "/favicon.png",        // for iOS devices
  },
  openGraph: {
    title: "Emad Akhtari",
    description: "Personal portfolio built with Next.js, Tailwind & Radix UI",
    url: "http://localhost:3000/",
    siteName: "Emad Akhtari's portfolio",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "http://localhost:3000/profile.jpg",
        width: 915,
        height: 1200,
        alt: "Emad Akhtari's portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AkhtariEmad",
    creator: "@AkhtariEmad",
  },
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "http://localhost:3000",
  },

};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="themed-scroll" data-scroll-behavior="smooth">{/* ← add this */}
      <body
        style={
          {
            ["--accent" as any]: TOKENS.accent,
            ["--selection-bg" as any]: TOKENS.selectionBg,
            ["--selection-text" as any]: TOKENS.selectionText,
          } as React.CSSProperties
        }
        className="min-h-screen w-screen overflow-x-hidden"
      >
        <div className="left-accent" />

        <ThemeProvider>
          <ThemeToggle />
          <RightMenu />
          <BottomMenu />

          <main className="relative z-10 w-full">
            <PageTransition>{children}</PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
