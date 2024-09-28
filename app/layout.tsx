import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Paytone_One, Athiti } from "next/font/google";
import "./globals.css";
import { GSAPProvider } from "@/provider/gsapProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

const paytoneOne = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-paytone-one",
  preload: true,
});

const athiti = Athiti({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-athiti",
  style: "normal",
  preload: true,
});

export const metadata: Metadata = {
  title: "Écoville",
  description: "La ville écologique qu'il faut vivre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <GSAPProvider>
        <body
          className={`${athiti.variable} ${paytoneOne.variable} antialiased`}
        >
          <main>{children}</main>
        </body>
      </GSAPProvider>
    </html>
  );
}
