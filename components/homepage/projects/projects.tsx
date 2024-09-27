import { SecondCol } from "./rightColonne";
import { FirstCol } from "./firstCol";

export const Project = () => {
  return (
    <section
      id={"project"}
      className="min-h-svh flex max-lg:flex-col w-full py-20 "
    >
      <FirstCol />
      <SecondCol />
    </section>
  );
};
