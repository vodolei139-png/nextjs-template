import { ParallaxImage, ParallaxLayer } from "@/components/surf/parallax";
import { WaveLayer } from "@/components/surf/waves";

export function Outro() {
  return (
    <section className="relative overflow-hidden bg-abyss">
      <ParallaxImage
        src="/surf/hero.webp"
        alt="Тёмный силуэт волны на закате"
        sizes="100vw"
        speed={90}
        className="absolute inset-0"
        imgClassName="scale-110 object-bottom"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-abyss/80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-abyss to-transparent"
      />

      <ParallaxLayer
        speed={-50}
        className="relative z-10 mx-auto max-w-3xl px-4 py-32 text-center sm:py-40"
      >
        <blockquote className="text-3xl font-bold leading-snug tracking-tight text-foam sm:text-4xl lg:text-5xl">
          «Волна заканчивается всегда. Вопрос только в том, где ты решишь
          выйти»
        </blockquote>
        <p className="mt-6 font-mono text-xs tracking-[0.3em] text-foam/55 uppercase">
          — заметки с воды
        </p>
      </ParallaxLayer>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 overflow-hidden sm:h-36"
      >
        <WaveLayer className="absolute bottom-0 left-0 h-20 text-ocean-900/70 motion-safe:animate-wave-slow" />
        <WaveLayer className="absolute bottom-0 left-0 h-28 text-abyss motion-safe:animate-wave-fast" />
      </div>
    </section>
  );
}
