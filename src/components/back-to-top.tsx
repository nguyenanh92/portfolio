"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-8 right-8 z-50 flex items-center justify-center",
        "size-10 rounded-full",
        "liquid-glass",
        "text-foreground/70 hover:text-foreground",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110 hover:shadow-lg",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ChevronUp className="size-4" strokeWidth={2.5} />
    </button>
  );
}
