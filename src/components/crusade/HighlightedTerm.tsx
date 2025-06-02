import React from "react";

interface HighlightedTermProps {
  children: React.ReactNode;
  className?: string;
}

const HighlightedTerm: React.FC<HighlightedTermProps> = ({
  children,
  className = "",
}) => {
  return (
    <span className={`text-cyan-400 font-bold ${className}`}>{children}</span>
  );
};

export default HighlightedTerm;
