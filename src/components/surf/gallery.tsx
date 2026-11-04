import { surfLocations } from "@/lib/gallery-data";
import { LocationCard } from "@/components/surf/location-card";

export function Gallery() {
  return (
    <section>
      <div>
        {surfLocations.map((location, index) => (
          <div key={location.id}>
            <LocationCard
              location={location}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
