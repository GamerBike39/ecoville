import { AppWindow, HandCoins, RefreshCcw, Waypoints } from "lucide-react";
import { EcovilleGovernanceData } from "./types/contentType";

export const governanceData: EcovilleGovernanceData = {
  title: "La Ruche Démocratique",
  content:
    "À Écoville, chaque voix compte. Notre système de gouvernance, inspiré de l'organisation des ruches, permet une prise de décision collaborative et transparente. Les citoyens participent activement à la gestion de leur ville via des plateformes numériques innovantes et des assemblées citoyennes régulières.",
  features: [
    {
      title: "Conseil municipal rotatif",
      description: "Renouvellement régulier des représentants",
      image: "/governance/conseil.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <RefreshCcw strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
    {
      title: "Budget participatif",
      description: "Implication citoyenne dans l'allocation des ressources",
      image: "/governance/money.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <HandCoins strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
    {
      title: "Application mobile",
      description:
        "Plateforme de démocratie participative, notre capital cloud vous appartient",
      image: "/governance/appli.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <AppWindow strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
    {
      title: "Groupes de travail",
      description: "Comités thématiques ouverts à tous les citoyens",
      image: "/governance/group.webp",
      icon: (
        <div className="border rounded-3xl p-4">
          <Waypoints strokeOpacity={0.8} size={40} className="text-white" />
        </div>
      ),
    },
  ],
};

export default governanceData;
