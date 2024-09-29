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
  keywords: "écologie, Découvrez le futur aujourd'hui",
  authors: [{ name: "Julien" }],
  openGraph: {
    title: "Écoville -Découvrez le futur aujourd'hui",
    description:
      "Découvrez Écoville, la ville du futur où l'écologie est au cœur de chaque décision.",
    url: "https://ecoville-liart.vercel.app/",
    siteName: "Écoville",
    images: [
      {
        url: "https://ecoville-liart.vercel.app/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Écoville - Une ville verte et durable",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Écoville - La ville écologique qu'il faut vivre",
    description:
      "Découvrez Écoville, la ville du futur où l'écologie est au cœur de chaque décision.",
    images: ["https://ecoville-liart.vercel.app/og_image.jpg"],
  },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //   },
  // },
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
