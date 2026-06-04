import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl liquid-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40 h-full",
        className
      )}
    >
      <a
        href={image}
        data-fancybox="gallery"
        data-caption={title}
        className="block cursor-pointer overflow-hidden relative aspect-video w-full bg-muted border-b border-zinc-200/50 dark:border-zinc-800/40"
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-w-768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            priority={false}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-mono">Zoom Image 🔍</span>
        </div>
      </a>
      <div className="flex flex-col flex-1 p-5 space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-x-2">
            <h3 className="font-semibold text-base leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
              {title}
            </h3>
            <span className="text-[10px] font-mono text-muted-foreground shrink-0 mt-0.5">{dates}</span>
          </div>
          {link && (
            <div className="hidden font-mono text-[10px] underline print:visible text-muted-foreground">
              {link.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
          )}
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert leading-relaxed">
            {description}
          </Markdown>
        </div>
        
        <div className="mt-auto pt-2 space-y-3">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge
                  className="px-1.5 py-0.5 text-[9px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 border-none rounded-md"
                  variant="outline"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank" className="inline-flex">
                  <Badge 
                    variant="outline" 
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono border-zinc-200 dark:border-zinc-800 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all rounded-full bg-white dark:bg-zinc-900"
                  >
                    {link.icon}
                    <span>{link.type}</span>
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
