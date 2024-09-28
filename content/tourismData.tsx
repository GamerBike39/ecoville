import { MapPin, Binoculars, Bike, Wifi, Leaf } from "lucide-react";
import { EcovilleTourismData } from "./types/contentType";

export const tourismData: EcovilleTourismData = {
  title: "Découvrir Écoville",
  content:
    "Écoville offre une **expérience touristique unique**, alliant innovation écologique et immersion dans la nature. Que vous soyez passionné d'architecture durable, amateur de nature ou simplement curieux de découvrir le futur de l'urbanisme, Écoville a quelque chose à vous offrir.",
  features: [
    {
      title: "La Tour Hexagonale",
      description:
        "Observatoire offrant une vue panoramique sur la ville et ses environs",
      image: "/tourism/tower.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <MapPin strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Découvrir",
        href: "/",
        price: "10 €",
        desc: "Prenez de la hauteur !",
      },
    },
    {
      title: "Safari Urbain Écologique",
      description:
        "Visite guidée de la biodiversité intégrée dans l'architecture de la ville",
      image: "/tourism/safari.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <Binoculars strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Découvrir",
        href: "/",
        price: "Gratuit",
        desc: "Suivez le parcours à votre rythme",
      },
    },
    {
      title: "Les Ruches Urbaines",
      description:
        "Découverte de l'apiculture urbaine et dégustation de miel local",
      image: "/tourism/beehives.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.8}
          >
            <path d="m8 2 1.88 1.88" />
            <path d="M14.12 3.88 16 2" />
            <path d="M9 7V6a3 3 0 1 1 6 0v1" />
            <path d="M5 7a3 3 0 1 0 2.2 5.1C9.1 10 12 7 12 7s2.9 3 4.8 5.1A3 3 0 1 0 19 7Z" />
            <path d="M7.56 12h8.87" />
            <path d="M7.5 17h9" />
            <path d="M15.5 10.7c.9.9 1.4 2.1 1.5 3.3 0 5.8-5 8-5 8s-5-2.2-5-8c.1-1.2.6-2.4 1.5-3.3" />
          </svg>
        </div>
      ),
      cta: {
        buttonText: "Découvrir",
        href: "/",
        price: "Gratuit",
        desc: "Goutez aux délices de l'apiculture",
      },
    },
    {
      title: "Vélo-Tour des Innovations",
      description:
        "Circuit à vélo présentant les technologies vertes d'Écoville",
      image: "/tourism/bike-tour.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <Bike strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Découvrir",
        href: "/",
        price: "Gratuit",
        desc: "Cultivez vous en vélo",
      },
    },
    {
      title: "Forêt Verticale",
      description:
        "Promenade dans les jardins suspendus des gratte-ciels écologiques",
      image: "/tourism/vertical-forest.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <Leaf strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Découvrir",
        href: "/",
        price: "Gratuit",
        desc: "Expérience végétale et architecturale époustouflante",
      },
    },
    {
      title: "Capsule Éco-Futuriste",
      description:
        "Expérience de logement dans des modules autonomes et écologiques",
      image: "/tourism/eco-capsule.webp",
      icon: (
        <div className="border rounded-3xl p-4 w-fit mx-auto">
          <Wifi strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
      cta: {
        buttonText: "Découvrir",
        href: "/",
        price: "50 €",
        desc: "Expérience de logement dans des modules autonomes et écologiques",
      },
    },
  ],
};

export default tourismData;
