import React from "react";
import Link from "next/link";

interface CrusadeLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
}

const CrusadeLayout: React.FC<CrusadeLayoutProps> = ({
  children,
  title,
  description,
  breadcrumbs,
}) => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <div className="container mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-4xl font-tech tracking-wider text-cyan-400 uppercase border-b border-cyan-800 pb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-400 mt-2">{description}</p>
          <div className="flex gap-2 mt-4 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                {index > 0 && <span className="text-gray-500">/</span>}
                <Link
                  href={crumb.href}
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </header>
        <main className="prose prose-invert max-w-none">{children}</main>
      </div>
    </div>
  );
};

export default CrusadeLayout;
