"use client";

import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Waves,
  Wind,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ParallaxImage } from "@/components/surf/parallax";
import type { SurfLocation } from "@/components/surf/gallery-data";
import { cn } from "@/lib/utils";

type LocationCardProps = {
  location: SurfLocation;
  index: number;
  reversed?: boolean;
};

function metaIcon(location: SurfLocation) {
  if (location.waveType.includes("Биг")) return Wind;
  if (location.waveType.includes("баррель")) return Waves;
  return Waves;
}

export function LocationCard({
  location,
  index,
  reversed = false,
}: LocationCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const isWide = location.orientation === "wide";
  const MetaIcon = metaIcon(location);

  const chips = [
    { icon: MetaIcon, label: location.waveType },
    { icon: CalendarDays, label: location.season },
    { icon: Wind, label: `Уровень: ${location.level}` },
  ];

  return (
    <article
      className={cn(
        "grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-14"
      )}
    >
      {/* Кадр */}
      <div
        className={cn(
          "md:col-span-7",
          reversed ? "md:order-2" : "md:order-1"
        )}
      >
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label={`Открыть кадр: ${location.name}`}
              className={cn(
                "group relative block w-full cursor-pointer overflow-hidden rounded-[2rem]",
                "ring-1 ring-white/10 transition-shadow duration-500",
                "hover:ring-ocean-300/50 focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-ocean-300",
                "shadow-[0_24px_80px_-32px_rgba(3,13,23,0.9)]"
              )}
            >
              <ParallaxImage
                src={location.image}
                alt={location.imageAlt}
                sizes="(min-width: 768px) 58vw, 100vw"
                speed={isWide ? 36 : 28}
                className={cn(
                  "w-full",
                  isWide ? "aspect-[16/10]" : "aspect-[3/4] sm:aspect-[4/5]"
                )}
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Градиент-подложка для подписи */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-abyss/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute bottom-4 left-5 flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-foam/90 uppercase">
                <MapPin className="h-3.5 w-3.5 text-ocean-300" />
                {location.coords}
              </span>
              <span className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-abyss/55 px-3 py-1.5 text-xs text-foam opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                Смотреть кадр
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl gap-0 overflow-hidden rounded-3xl border-white/10 bg-abyss p-0 text-foam [&>button]:text-foam/70 sm:max-w-4xl">
            <div className="relative h-[46vh] w-full sm:h-[52vh]">
              <ParallaxImage
                src={location.image}
                alt={location.imageAlt}
                sizes="(min-width: 896px) 896px, 100vw"
                speed={10}
                className="absolute inset-0"
              />
            </div>
            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-sm text-sun">{number}</span>
                <DialogTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {location.name}
                </DialogTitle>
                <span className="text-sm text-foam/60">{location.region}</span>
              </div>
              <DialogDescription className="text-sm leading-relaxed text-foam/75 sm:text-base">
                {location.description}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 pt-1">
                {chips.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foam/85"
                  >
                    <Icon className="h-3.5 w-3.5 text-ocean-300" />
                    {label}
                  </span>
                ))}
              </div>
              <p className="pt-2 font-mono text-xs tracking-[0.2em] text-foam/45 uppercase">
                {location.ocean} океан · {location.coords}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Описание */}
      <div
        className={cn(
          "space-y-5 md:col-span-5",
          reversed ? "md:order-1 md:text-right" : "md:order-2"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "block font-mono text-6xl font-bold leading-none text-white/10 select-none lg:text-7xl",
            reversed && "md:text-right"
          )}
        >
          {number}
        </span>
        <div className={cn("space-y-2", reversed && "md:flex md:flex-col md:items-end")}>
          <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-ocean-300 uppercase">
            <Waves className="h-4 w-4" />
            {location.region}
          </p>
          <h3 className="text-3xl font-bold tracking-tight text-foam lg:text-4xl">
            {location.name}
          </h3>
        </div>
        <p className="max-w-md leading-relaxed text-foam/70 md:text-lg lg:max-w-none">
          {location.description}
        </p>
        <div
          className={cn(
            "flex flex-wrap gap-2",
            reversed && "md:justify-end"
          )}
        >
          {chips.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foam/80"
            >
              <Icon className="h-3.5 w-3.5 text-sun" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
