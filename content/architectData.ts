import { EcovilleArchitectureData } from "./types/contentType";

export const architectureData: EcovilleArchitectureData = {
  title: "Notre Signature Architecturale",
  content:
    "Chaque bâtiment, chaque quartier d'Écoville incarne notre engagement envers l'**efficacité et l'harmonie**. Nos structures hexagonales ne sont pas qu'esthétiques ; elles **optimisent l'espace**, favorisent la circulation naturelle de l'air et maximisent l'exposition solaire pour une **gestion énergétique optimale**.",
  features: [
    {
      title: "Bâtiments modulaires",
      description: "Structures adaptables aux besoins changeants",
      image: "/archi/module.webp",
    },
    {
      title: "Façades végétalisées",
      description: "Intégration de la nature dans l'architecture",
      image: "/archi/facade.webp",
    },
    {
      title: "Gestion de l'eau",
      description: "Systèmes innovants de récupération d'eau de pluie",
      image: "/archi/recup.webp",
    },
    {
      title: "Matériaux écologiques",
      description: "Utilisation de ressources locales et durables",
      image: "/archi/construction.webp",
    },
  ],
};

export default architectureData;
