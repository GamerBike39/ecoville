import React from "react";

/**
 * A custom React hook that transforms text by making words or phrases surrounded by '**' bold.
 *
 * @param content - The input string containing text with '**' for bold text.
 * @returns A React node or array of React nodes with bold text rendered inside <b> tags.
 */
const useBoldText = (content: string): React.ReactNode => {
  return React.useMemo(() => {
    if (!content) return null;

    const parts: string[] = content.split(/(\*\*.*?\*\*)/g);

    return parts.map((part: string, index: number): React.ReactNode => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong className="font-black text-primary opacity-85" key={index}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  }, [content]);
};

export default useBoldText;
