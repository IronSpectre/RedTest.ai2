import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedTest AI - Transforming Healthcare with Artificial Intelligence",
  description: "RedTest AI is revolutionizing medical diagnostics and patient care through cutting-edge AI technology. Discover our innovative healthcare solutions including Lebn AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
