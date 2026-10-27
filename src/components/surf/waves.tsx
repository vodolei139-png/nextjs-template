import { cn } from "@/lib/utils";

// Длина волны — 900 единиц, в path ровно два периода, поэтому
// сдвиг на -50% ширины зацикливается без шва.
const WAVE_PATH =
  "M0 60 C150 100 300 20 450 60 C600 100 750 20 900 60 " +
  "C1050 100 1200 20 1350 60 C1500 100 1650 20 1800 60 L1800 120 L0 120 Z";

export function WaveLayer({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1800 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("block h-full w-[200%]", className)}
    >
      <path d={WAVE_PATH} fill="currentColor" />
    </svg>
  );
}
