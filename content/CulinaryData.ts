import { EcovilleCulinaryData } from "./types/contentType";

export const ecovilleCulinaryData: EcovilleCulinaryData = {
  title: "Savourez Écoville",
  content:
    "Découvrez une expérience culinaire unique où l'innovation écologique rencontre la gastronomie. Nos restaurants allient saveurs locales, agriculture urbaine et technologies durables pour créer des plats aussi délicieux que respectueux de l'environnement.",
  highlightedRestaurant: {
    title: "L'Éco-Lab Culinaire",
    description:
      "Centre d'innovation gastronomique où les chefs expérimentent de nouvelles techniques de cuisine durable et invitent les visiteurs à participer à des ateliers culinaires éco-responsables.",
    image: "/blog_cuisine/labo.webp",
  },
  articles: [
    {
      title: "Les Délices de la Permaculture Urbaine",
      description:
        "Découvrez comment nos chefs transforment les récoltes de nos jardins urbains en mets raffinés et durables.",
      image: "/blog_cuisine/perma.webp",
    },
    {
      title: "La Révolution des Protéines Alternatives",
      description:
        "Explorez le futur de l'alimentation à travers nos innovations en matière de viandes végétales et d'insectes comestibles.",
      image: "/blog_cuisine/insect.webp",
    },
    {
      title: "Du Compost à l'Assiette",
      description:
        "Apprenez comment Écoville a créé un système alimentaire en circuit fermé, où chaque déchet devient une ressource.",
      image: "/blog_cuisine/compost.webp",
    },
    {
      title: "Le Jardin Suspendu",
      description:
        "Restaurant panoramique situé au sommet de la Tour Hexagonale, offrant une cuisine basée sur les produits cultivés dans ses propres jardins verticaux.",
      image: "/blog_cuisine/suspendu.webp",
    },
    {
      title: "L'Alvéole Gourmande",
      description:
        "Bistro local utilisant exclusivement des ingrédients provenant des ruches et potagers urbains d'Écoville.",
      image: "/blog_cuisine/gourmande.webp",
    },
    {
      title: "Fusion Hexagonale",
      description:
        "Restaurant futuriste proposant des plats imprimés en 3D à partir d'algues et de protéines végétales cultivées localement.",
      image: "/blog_cuisine/fusion.webp",
    },
  ],
};

export default ecovilleCulinaryData;
