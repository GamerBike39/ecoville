import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Écoville - README",
  description:
    "Page README du projet Écoville, la ville écologique qu'il faut vivre",
};

export default function ReadmePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">EcoVille</h1>

          <p className="text-gray-700 mb-4">
            Site web d&apos;Écoville imaginé pour le{" "}
            <Link
              href="https://youtu.be/LxfRrcanK2A?si=QOks2GAOcnywLSXZ"
              className="text-blue-600 hover:underline"
            >
              concours
            </Link>{" "}
            de l&apos;
            <Link
              href="https://www.ecole-du-web.net/"
              className="text-blue-600 hover:underline"
            >
              École du web
            </Link>
            .
          </p>

          <p className="text-gray-700 mb-6">
            Écoville est une ville imaginaire qui s&apos;inspire de la forme
            hexagonale et de ses caractéristiques environnementales. Elle est
            conçue pour minimiser son impact environnemental tout en favorisant
            une vie communautaire active et ouverte.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Outils de développement
          </h2>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              Framework{" "}
              <Link
                href="https://nextjs.org/"
                className="text-blue-600 hover:underline"
              >
                Next.js
              </Link>{" "}
              (App Router)
            </li>
            <li>
              <Link
                href="https://tailwindcss.com/"
                className="text-blue-600 hover:underline"
              >
                Tailwind CSS
              </Link>{" "}
              pour le CSS et ses classes utilitaires
            </li>
            <li>
              Librairie{" "}
              <Link
                href="https://www.gsap.com"
                className="text-blue-600 hover:underline"
              >
                GSAP
              </Link>{" "}
              pour les animations et ses super plugins
            </li>
            <li>
              <Link
                href="https://lenis.darkroom.engineering/"
                className="text-blue-600 hover:underline"
              >
                Lenis.js
              </Link>{" "}
              pour améliorer l&apos;expérience des animations au scroll
            </li>
            <li>
              <Link
                href="https://ui.shadcn.com/"
                className="text-blue-600 hover:underline"
              >
                shadcn
              </Link>{" "}
              installé mais non utilisé
            </li>
            <li>
              <Link
                href="https://react-compare-slider.vercel.app/?path=/docs/docs-introduction--docs"
                className="text-blue-600 hover:underline"
              >
                React Compare Slider
              </Link>{" "}
              pour la comparaison avant/après
            </li>
            <li>
              Polices utilisées :{" "}
              <Link
                href="https://fonts.google.com/specimen/Paytone+One"
                className="text-blue-600 hover:underline"
              >
                Paytone One
              </Link>{" "}
              et{" "}
              <Link
                href="https://fonts.google.com/specimen/Athiti"
                className="text-blue-600 hover:underline"
              >
                Athiti
              </Link>
            </li>
            <li>
              Icônes de{" "}
              <Link
                href="https://lucide.dev/"
                className="text-blue-600 hover:underline"
              >
                Lucide
              </Link>{" "}
              et{" "}
              <Link
                href="https://www.radix-ui.com/docs/primitives/icons/overview"
                className="text-blue-600 hover:underline"
              >
                Radix UI
              </Link>
            </li>
            <li>
              Images générées par{" "}
              <Link
                href="https://www.midjourney.com/home"
                className="text-blue-600 hover:underline"
              >
                Midjourney
              </Link>
            </li>
          </ul>

          <p className="text-gray-700 mb-6">
            La quasi-totalité du contenu textuel est dans le dossier{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded">content</code>.
          </p>
          <p className="text-gray-700 mb-6">
            Toutes les images (webp et svg) sont dans le dossier{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded">public</code>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Expérience
          </h2>

          <p className="text-gray-700 mb-4">
            J&apos;ai beaucoup apprécié ce concours. N&apos;ayant pas eu le
            temps pour faire un multipage, je me suis concentré sur une seule
            page, avec un menu de navigation accessible via un bouton situé en
            haut à droite de la page.
          </p>

          <p className="text-gray-700 mb-6">
            Peut-être pousserai-je le projet un peu plus loin ensuite, pour en
            faire une base de landing page ^^ avec la gestion du blog etc.
          </p>

          <p className="text-gray-600 italic mt-8">
            P.S. : Je n&apos;ai pas forcément été très rigoureux sur le nommage
            des commits 🙃
          </p>
        </div>
      </div>
    </div>
  );
}
