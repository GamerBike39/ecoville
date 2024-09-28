import { useBoldText } from "@/lib/useBoldText";
import React from "react";

/**
 * A component that wraps the useBoldText hook for easy use in JSX.
 *
 * @param content - The input string containing text with '**' for bold text.
 * @returns A React component rendering the transformed bold text.
 */
export const BoldText: React.FC<{ content: string }> = ({ content }) => {
  const renderedContent = useBoldText(content);
  return <>{renderedContent}</>;
};
