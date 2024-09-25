export type EcovilleProjectData = {
  title: string;
  subtitle: string;
  whyEcoville: {
    title: string;
    content: string;
  };
  features: {
    title: string;
    description: string;
    image?: string;
  }[];
  whyJoin: {
    title: string;
    reasons: {
      title: string;
      description: string;
      image?: string;
    }[];
  };
  // vision: {
  //   title: string;
  //   content: string;
  //   image?: string;
  // };
  // slogan: string;
};
