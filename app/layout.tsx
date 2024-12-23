import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solutions Broker",
  description:
    "From routine maintenance to stunning renovations, we&apos;ve got you covered—every step of the way",
  keywords: [
    "solutions broker ca",
    "solutions canada",
    "broker canada",
    "canada",
    "Home maintenance services Canada",
    "Renovation experts Canada",
    "Stunning home renovations Canada",
    "Routine property maintenance Canada",
    "Full-service home solutions Canada",
    "Renovation and remodeling Canada",
    "Maintenance and repair services Canada",
    "Custom renovation projects Canada",
    "Home improvement specialists Canada",
    "Professional maintenance team Canada",
    "Affordable home renovations Canada",
    "Quality home care services Canada",
    "Reliable renovation contractors Canada",
    "Complete renovation solutions Canada",
    "Trusted home improvement company Canada",
  ],
  category: "Home Services",
  authors: [
    { name: "Solutions Broker", url: "https://solutionsbroker.ca" },
    { name: "Quebits", url: "https://quebits.ca" },
  ],
  openGraph: {
    title: "Solutions Broker",
    description:
      "From routine maintenance to stunning renovations, we&apos;ve got you covered—every step of the way",
    url: "https://solutionsbroker.ca",
    siteName: "Solutions Broker",
    images: [
      {
        url: "https://solutionsbroker.ca/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions Broker",
    description:
      "From routine maintenance to stunning renovations, we&apos;ve got you covered—every step of the way",
    images: ["https://solutionsbroker.ca/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const revalidate = 0;

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
