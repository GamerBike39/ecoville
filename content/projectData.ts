import { EcovilleProjectData } from "./types/typeData";

export const ecovilleProjectData = {
  title: "Harmonie Hexagonale",
  subtitle: "La Cité du Futur, Inspirée par la Nature",

  whyEcoville: {
    title: "Pourquoi Écoville ?",
    content:
      "Dans un monde en quête d'équilibre, Écoville émerge comme une solution visionnaire. Inspirée par la structure parfaite des ruches d'abeilles, notre ville adopte la forme hexagonale pour créer un environnement urbain en parfaite symbiose avec la nature.",
  },

  features: [
    {
      title: "Efficacité Énergétique",
      description:
        "Grâce à sa structure hexagonale, Écoville maximise l'utilisation de l'espace et l'efficacité énergétique, réduisant significativement notre empreinte carbone.",
      image: "/project/eff.png",
    },
    {
      title: "Biodiversité Intégrée",
      description:
        "Chaque cellule hexagonale abrite des espaces verts, favorisant la biodiversité au cœur même de la vie urbaine.",
      image: "/project/diversite.png",
    },
    {
      title: "Mobilité Durable",
      description:
        "Un réseau de transport innovant, calqué sur les voies de communication des abeilles, privilégie les déplacements doux et les transports en commun écologiques.",
      image: "/project/transport.png",
    },
    {
      title: "Économie Circulaire",
      description:
        "À l'image d'une ruche, Écoville fonctionne sur un modèle d'économie circulaire, où chaque ressource est optimisée et réutilisée.",
      image: "/project/circu.png",
    },
  ],

  whyJoin: {
    title: "Pourquoi venir à Écoville ?",
    reasons: [
      {
        title: "Vivre en Harmonie",
        description:
          "Expérimentez une vie en parfait équilibre entre confort moderne et respect de l'environnement.",
        image: "/project/harmony.png",
      },
      {
        title: "Innover",
        description:
          "Rejoignez une communauté de pionniers, façonnant ensemble les solutions urbaines de demain.",
        image: "/project/innov.png",
      },
      {
        title: "S'épanouir",
        description:
          "Profitez d'un cadre de vie conçu pour le bien-être, alliant nature, technologie et lien social.",
        image: "/project/epanoui.png",
      },
      //   {
      //     title: "Communauté Collaborative",
      //     description:
      //       "La structure hexagonale favorise naturellement les interactions sociales et la collaboration entre les habitants.",
      //     image: "/project/commu.png",
      //   },
    ],
  },

  //   vision: {
  //     title: "Notre Vision",
  //     content:
  //       "Écoville n'est pas seulement une ville, c'est un écosystème vivant où chaque habitant, à l'instar d'une abeille dans sa ruche, contribue à la prospérité et à la durabilité de l'ensemble. Ensemble, construisons un avenir où l'urbanisation rime avec préservation.",
  //   },

  //   slogan: "Écoville : Où chaque cellule compte, où chaque action résonne.",
} as EcovilleProjectData;

export default ecovilleProjectData;
