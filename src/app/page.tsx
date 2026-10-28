import { Gallery } from "@/components/surf/gallery";
import { Hero } from "@/components/surf/hero";

export default function Page() {
  return (
    <div id="top" className="bg-abyss text-foam">
      <main>
        <Hero />
        <Gallery />
      </main>
    </div>
  );
}
