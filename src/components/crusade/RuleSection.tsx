import React from "react";

interface RuleSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const RuleSection: React.FC<RuleSectionProps> = ({
  title,
  children,
  id,
  className = "",
}) => {
  return (
    <section id={id} className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-tech text-cyan-500 uppercase mb-6 border-b border-cyan-900/50 pb-4">
        {title}
      </h2>
      <div className="space-y-6 text-lg leading-relaxed">{children}</div>
    </section>
  );
};

export default RuleSection;
