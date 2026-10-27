import { ArrowDown, Waves } from "lucide-react";

import { ParallaxImage, ParallaxLayer } from "@/components/surf/parallax";
import { WaveLayer } from "@/components/surf/waves";

const stats = [
  { value: "6", label: "локаций" },
  { value: "3", label: "океана" },
  { value: "100%", label: "от первого лица" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Параллакс-фон */}
      <ParallaxImage
        src="/surf/hero.webp"
        alt="Вид от первого лица: сёрфер заходит на волну на закате, руки на рейлах и нос доски в кадре"
        sizes="100vw"
        priority
        speed={110}
        className="absolute inset-0"
        imgClassName="scale-105"
      />
      {/* Градиенты для читаемости текста */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-abyss/75 via-abyss/25 to-abyss"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,13,23,0.55)_100%)]"
      />

      {/* Контент */}
      <ParallaxLayer
        speed={-70}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pt-24 pb-40 text-center sm:pb-48"
      >
        <p className="motion-safe:animate-float flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs tracking-[0.25em] text-foam/90 uppercase backdrop-blur-sm">
          <Waves className="h-4 w-4 text-ocean-300" />
          Галерея от первого лица
        </p>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-foam drop-shadow-lg sm:text-7xl lg:text-8xl">
          Внутри волны
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foam/80 sm:text-lg">
          Шесть точек на карте, где стоят лучшие волны планеты — так, как их
          видит райдер: с доски, из пены, из тени трубы.
        </p>
        <dl className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-foam sm:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 font-mono text-xs tracking-[0.2em] text-foam/60 uppercase">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </ParallaxLayer>

      {/* Подсказка скролла */}
      <div className="absolute bottom-36 left-1/2 z-10 -translate-x-1/2 sm:bottom-44">
        <a
          href="#gallery"
          aria-label="Пролистать к галерее"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-foam/80 transition-colors hover:border-ocean-300 hover:text-ocean-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300"
        >
          <ArrowDown className="h-5 w-5 motion-safe:animate-bounce" />
        </a>
      </div>

      {/* Живые волны на стыке со следующей секцией */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 overflow-hidden sm:h-52"
      >
        <WaveLayer className="absolute bottom-0 left-0 h-24 text-ocean-400/30 motion-safe:animate-wave-medium" />
        <WaveLayer className="absolute bottom-3 left-0 h-24 text-ocean-700/60 motion-safe:animate-wave-slow" />
        <WaveLayer className="absolute bottom-0 left-0 h-32 text-abyss motion-safe:animate-wave-fast" />
      </div>
    </section>
  );
}
