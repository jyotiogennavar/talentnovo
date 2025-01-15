import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

import '@styles/reset.css';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: "Simple solutions for managing talent better | TalentNovo",
  description: "Looking for better ways to manage talent? TalentNovo makes it easy to create teams that are motivated, high-performing, and ready for what’s next.",
  icons: {
    icon: '/favicon.svg', // Path to your SVG favicon
  },

  openGraph: {
    type: "website",
    url: "https://talentnovo.com",
    title: "Simple solutions for managing talent better | TalentNovo",
    description: "Looking for better ways to manage talent? TalentNovo makes it easy to create teams that are motivated, high-performing, and ready for what’s next.",
    images: [
      {
        url: "https://talentnovo.com/og-image.jpg",
        alt: "TalentNovo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-XX8C2W7P1Z" />
    </html>
  );
}
