import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const text = Prompt({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xandyy",
  description: "Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-theme="retro"
      style={{ scrollBehavior: "smooth" }}
      className="bg-base-100"
      lang="en"
    >
      <link rel="icon" sizes="64x240" href='/logo.png' />
      <ThemeProvider>
        <body className={text.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
