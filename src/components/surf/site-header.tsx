import { Waves } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-abyss/45 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm tracking-[0.3em] text-foam uppercase transition-colors hover:text-ocean-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300"
        >
          <Waves className="h-4 w-4 text-ocean-300" />
          Внутри волны
        </a>
        <nav>
          <a
            href="#gallery"
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-foam/85 transition-colors hover:border-ocean-300 hover:text-ocean-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300"
          >
            Галерея
          </a>
        </nav>
      </div>
    </header>
  );
}
