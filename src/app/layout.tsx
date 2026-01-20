import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Preloader from "@/components/preloader";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paramvah Construction | Building the Future of Mangalore",
  description: "Paramvah Construction delivers premier residential and commercial projects with precision, safety, and operational excellence in Mangalore, Karnataka.",
  keywords: ["Construction Mangalore", "General Construction", "Interior Fit-Out", "Real Estate Mangalore", "Paramvah", "Civil Engineering"],
  authors: [{ name: "Samvith Nair" }],
  openGraph: {
    title: "Paramvah Construction | Building with Integrity",
    description: "Premier construction excellence in Mangalore. We don't just build, we create solutions.",
    url: "https://paramvah.com",
    siteName: "Paramvah Construction",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebas.className} ${bebas.variable} antialiased`}
        suppressHydrationWarning
      >
        <Preloader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
