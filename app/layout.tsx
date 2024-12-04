import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solutions Broker",
  description:
    "From routine maintenance to stunning renovations, we&apos;ve got you covered—every step of the way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
