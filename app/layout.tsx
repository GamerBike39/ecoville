import type { Metadata } from "next";
import "./globals.css";
import { Paytone_One, Athiti } from "next/font/google";
import { GSAPProvider } from "@/provider/gsapProvider";
import { Nav } from "@/components/navigation/nav";
import { Footer } from "@/components/navigation/footer";

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
          <Nav />
          <main>{children}</main>
          <Footer />
        </body>
      </GSAPProvider>
    </html>
  );
}
