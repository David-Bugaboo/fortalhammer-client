import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
    level: number;
  }[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed right-8 top-1/2 -translate-y-1/2 w-64 transition-all duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <nav className="bg-background/80 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
        <h2 className="font-conduit text-lg font-bold mb-4 text-primary">
          Índice
        </h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              style={{ marginLeft: `${(item.level - 1) * 1}rem` }}
            >
              <a
                href={`#${item.id}`}
                className={cn(
                  "block py-1 text-sm hover:text-primary transition-colors",
                  activeId === item.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={scrollToTop}
          className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronUp className="h-4 w-4" />
          Voltar ao topo
        </button>
      </nav>
    </div>
  );
}
