import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Hexagon } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t py-10 text-center relative">
      <Hexagon
        strokeWidth={1}
        className="max-lg:hidden size-40 stroke-green-400 fill-white absolute z-10 top-0 right-10 -translate-y-1/2"
      />

      <div className="container">
        <p className="text-fluid-sm">
          Site web d&apos;<span className="font-bold">Écoville</span> ville
          imaginée pour le concours de l{"'"}
          <Link
            href="https://www.ecole-du-web.net/"
            className="hover:underline hover:text-green-700 transition-all duration-300 font-bold"
          >
            Ecole du Web
          </Link>
        </p>

        <p className="text-fluid-sm">
          Réalisé avec ❤️ par{" "}
          <Link
            href="https://github.com/GamerBike39"
            className="hover:underline hover:text-green-700 transition-all duration-300 font-bold"
          >
            Julien <GitHubLogoIcon className="inline-block w-4 h-4 ml-1" />
          </Link>
        </p>
        <Link
          href="/readme"
          className="text-fluid-sm hover:underline hover:text-green-700 transition-all duration-300"
        >
          Sujet du concours
        </Link>
      </div>
    </footer>
  );
};
