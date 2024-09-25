import { cn } from "@/lib/utils";

type VerticalLineProps = {
  number?: 2 | 3 | 4;
  className?: string;
};

export const VerticalLine = ({ number = 3, className }: VerticalLineProps) => {
  return (
    <div
      className={cn("absolute w-full h-full flex -z-10 select-none", className)}
    >
      {[...Array(number)].map((_, index) => {
        let widthClass;

        switch (true) {
          case number === 2:
            widthClass = "w-1/2";
            break;
          case number === 3:
            widthClass = "w-1/3";
            break;
          case number === 4:
            widthClass = "w-1/4";
            break;
          default:
            console.warn(`Number ${number} not handled`);
            widthClass = "w-auto"; // ou une valeur par défaut appropriée
        }

        return (
          <span
            key={index}
            className={cn("h-full border-l border-black/10", widthClass)}
          />
        );
      })}
    </div>
  );
};
