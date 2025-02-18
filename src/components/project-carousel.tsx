"use client";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface ProjectCarouselProps {
  projects: ReadonlyArray<{
    readonly title: string;
    readonly href?: string;
    readonly description: string;
    readonly dates: string;
    readonly technologies: readonly string[];
    readonly image?: string;
    readonly video?: string;
    readonly links?: readonly {
      readonly icon: React.ReactNode;
      readonly type: string;
      readonly href: string;
    }[];
  }>;
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Convert readonly array to regular array for grouping
  const projectsArray = [...projects];
  const groupedProjects = projectsArray.reduce<typeof projectsArray[]>((acc, curr, i) => {
    const groupIndex = Math.floor(i / 4); // Changed from 8 to 4 (2 items × 2 rows)
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(curr);
    return acc;
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto">
      <div className="overflow-hidden px-4 py-4" ref={emblaRef}>
        <div className="flex -ml-4">
          {groupedProjects.map((group, groupIndex) => (
            <div 
              key={groupIndex}
              className="flex-[0_0_100%] min-w-0 pl-4"
            >
              <div className="grid grid-rows-2 grid-cols-2 gap-6 h-full">
                {group.map((project) => (
                  <div key={project.title} className="h-full">
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto ml-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all disabled:opacity-0"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto mr-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all disabled:opacity-0"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 