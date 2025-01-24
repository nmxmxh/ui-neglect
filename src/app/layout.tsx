import Providers from "@/lib/providers";
import GlobalStyles from "@/styles/global";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"], // Specify subsets to reduce font payload
  weight: ["400", "700"], // Specify weights
  style: ["normal", "italic"], // Include styles if needed
  display: "swap", // Use `swap` for better loading behavior
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
    <html lang="en" className={atkinsonHyperlegible.className}>
      <Providers>
        <GlobalStyles />
        <body>{children}</body>
      </Providers>
    </html>
  );
}
