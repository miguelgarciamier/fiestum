"use client";
import { useEffect, useState } from "react";
import { getUserLocation } from "@/features/map/services/mapService";

export default function MapPage() {
  const [pos, setPos] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUserLocation()
      .then(setPos)
      .catch((e) => setError(e?.message ?? "No se pudo obtener la ubicación"));
  }, []);

  return (
    <main style={{ padding: 16 }}>
      <h2>Mapa</h2>
      {pos ? (
        <p>
          Ubicación: {pos.lat.toFixed(5)}, {pos.lng.toFixed(5)}
        </p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Obteniendo ubicación...</p>
      )}
      <div style={{ height: 300, border: "1px solid #ddd", marginTop: 12 }}>
        {/* Map placeholder for Phase 1 */}
        <p style={{ padding: 8 }}>Aquí irá el mapa.</p>
      </div>
    </main>
  );
}
