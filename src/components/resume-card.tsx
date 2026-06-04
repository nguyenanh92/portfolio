"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer group"
      onClick={handleClick}
    >
      <div className="flex bg-transparent hover:bg-zinc-500/5 dark:hover:bg-zinc-400/5 p-4 rounded-xl border border-transparent hover:border-zinc-200/40 dark:hover:border-zinc-800/30 transition-all duration-300">
        <div className="flex-none">
          <Avatar className="border border-zinc-200/60 dark:border-zinc-800/50 size-12 m-auto bg-white dark:bg-zinc-950 p-1">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain rounded-full"
            />
            <AvatarFallback className="font-mono text-zinc-500">{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1 ml-2">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-[9px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-none"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      "size-3.5 ml-1.5 text-zinc-400 transform transition-all duration-300 ease-out group-hover:translate-x-0.5",
                      isExpanded ? "rotate-90 text-primary" : "rotate-0"
                    )}
                  />
                )}
              </h3>
              <div className="text-xs font-mono text-muted-foreground text-right shrink-0">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs text-muted-foreground font-medium">{subtitle}</div>}
          </div>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-zinc-200/50 dark:border-zinc-800/50 pl-3"
            >
              {description}
            </motion.div>
          )}
        </div>
      </div>
    </Link>
  );
};
