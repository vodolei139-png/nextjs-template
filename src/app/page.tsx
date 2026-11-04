import { surfLocations } from "@/lib/gallery-data";
import { LocationCard } from "@/components/surf/location-card";

export default function Home() {
  return (
    <main
      style={{
        padding: 0,
        margin: 0,
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#cfd6dd", // Светло‑серый фон (как нейтральный холст)
        color: "#2d538f",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <header
        style={{
          padding: "4rem 1.5rem",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#0f172a",
            margin: "0 0 0.5rem 0",
            fontSize: "3rem",
            lineHeight: "1.1",
            textShadow: "0 2px 4px rgba(255, 255, 255, 0.8)",
          }}
        >
          Лучшие сёрф‑споты мира
        </h1>
        <p style={{ color: "#475569", fontSize: "1.25rem" }}>
          Места, где рождаются идеальные волны. Прокрутите вниз.
        </p>
      </header>

      {/* gap создаёт «воздух» между карточками — они не сливаются */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3.5rem", // Промежуток между карточками
          paddingBottom: "3.5rem",
        }}
      >
        {surfLocations.map((spot, index) => (
          <LocationCard key={spot.id} location={spot} index={index} />
        ))}
      </div>
    </main>
  );
}
