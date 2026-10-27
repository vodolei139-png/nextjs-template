import { Compass, Waves } from "lucide-react";

import { surfLocations } from "@/components/surf/gallery-data";
import { LocationCard } from "@/components/surf/location-card";

function WaveDivider() {
  return (
    <div aria-hidden="true" className="flex items-center gap-4 py-16 md:py-20">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/15" />
      <Waves className="h-5 w-5 text-ocean-400/60" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/15" />
    </div>
  );
}

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-abyss pb-8 scroll-mt-16"
    >
      {/* Мягкое свечение глубины */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(31,126,166,0.18),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <header className="max-w-2xl pb-4 pt-20 md:pt-28">
          <p className="flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-ocean-300 uppercase">
            <Compass className="h-4 w-4" />
            Локации
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foam sm:text-5xl">
            Шесть точек на карте
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foam/70 sm:text-lg">
            От гигантов Назаре до стеклянных закатов Малибу. Нажмите на кадр,
            чтобы рассмотреть его крупнее и узнать, что там под килем.
          </p>
        </header>

        <div>
          {surfLocations.map((location, index) => (
            <div key={location.id}>
              {index > 0 && <WaveDivider />}
              <LocationCard
                location={location}
                index={index}
                reversed={index % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
