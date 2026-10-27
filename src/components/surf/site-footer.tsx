import { Waves } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-abyss">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row">
        <p className="flex items-center gap-2 font-mono text-sm tracking-[0.3em] text-foam uppercase">
          <Waves className="h-4 w-4 text-ocean-400" />
          Внутри волны
        </p>
        <p className="font-mono text-xs tracking-[0.2em] text-foam/45 uppercase">
          6 локаций · 3 океана · POV
        </p>
      </div>
    </footer>
  );
}
