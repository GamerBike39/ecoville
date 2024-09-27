import { MapPin, Binoculars, Compass, Bike, Wifi, Leaf } from "lucide-react";
import { EcovilleTourismData } from "./types/contentType";

export const tourismData: EcovilleTourismData = {
  title: "Découvrez Écoville",
  content:
    "Écoville offre une expérience touristique unique, alliant innovation écologique et immersion dans la nature. Que vous soyez passionné d'architecture durable, amateur de nature ou simplement curieux de découvrir le futur de l'urbanisme, Écoville a quelque chose à vous offrir.",
  features: [
    {
      title: "La Tour Hexagonale",
      description:
        "Observatoire offrant une vue panoramique sur la ville et ses environs",
      image: "/tourism/tower.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <MapPin strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
    {
      title: "Safari Urbain Écologique",
      description:
        "Visite guidée de la biodiversité intégrée dans l'architecture de la ville",
      image: "/tourism/safari.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <Binoculars strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
    {
      title: "Parcours des Ruches Urbaines",
      description:
        "Découverte de l'apiculture urbaine et dégustation de miel local",
      image: "/tourism/beehives.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <Compass strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
    {
      title: "Vélo-Tour des Innovations",
      description:
        "Circuit à vélo présentant les technologies vertes d'Écoville",
      image: "/tourism/bike-tour.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <Bike strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
    {
      title: "Forêt Verticale",
      description:
        "Promenade dans les jardins suspendus des gratte-ciels écologiques",
      image: "/tourism/vertical-forest.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <Leaf strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
    {
      title: "Nuit dans une Capsule Éco-Futuriste",
      description:
        "Expérience de logement dans des modules autonomes et écologiques",
      image: "/tourism/eco-capsule.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <Wifi strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
  ],
};

export default tourismData;
