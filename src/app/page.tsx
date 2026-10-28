import { Gallery } from "@/components/surf/gallery";
import { Hero } from "@/components/surf/hero";
import { Footer } from "@/components/surf/footer";
import { SiteUser } from "@/components/view/site-user";
import { SiteHeader } from "@/components/view/site-header";

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
