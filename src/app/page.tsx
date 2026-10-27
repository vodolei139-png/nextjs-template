import { Gallery } from "@/components/surf/gallery";
import { Hero } from "@/components/surf/hero";
import { Outro } from "@/components/surf/outro";
import { SiteFooter } from "@/components/surf/site-footer";
import { SiteHeader } from "@/components/surf/site-header";

export default function IndexPage() {
  return (
    <div id="top" className="bg-abyss text-foam">
      <SiteHeader />
      <main>
        <Hero />
        <Gallery />
        <Outro />
      </main>
      <SiteFooter />
    </div>
  );
}
