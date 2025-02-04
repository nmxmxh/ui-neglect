import type { Metadata } from "next";
import { Lato } from "next/font/google";

import Providers from "@/lib/providers";
import GlobalStyles from "@/styles/global";

const lato = Lato({
  subsets: ["latin"], // Add subsets for the font
  weight: ["100", "300", "400", "700", "900"], // Include the desired weights
  style: ["normal", "italic"], // Add italic style
  display: "swap", // Use `swap` for better font loading behavior
});

export const metadata: Metadata = {
  title: "Why the UI neglect?",
  description: "A creative & interactive series of articles and examples created by Nobert Momoh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <Providers>
        <GlobalStyles />
        <body>{children}</body>
      </Providers>
    </html>
  );
}
