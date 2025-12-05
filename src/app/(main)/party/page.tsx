"use client";
import { useEffect, useState } from "react";
import { listParties, type Party } from "@/features/party/services/partyService";

export default function PartyPage() {
  const [items, setItems] = useState<Party[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    listParties()
      .then((d) => setItems(d))
      .catch((e) => setError(e?.message ?? "Error cargando fiestas"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main style={{ padding: 16 }}>
      <h2>Fiestas</h2>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul style={{ display: "grid", gap: 8 }}>
          {items.map((p) => (
            <li key={p.id} style={{ border: "1px solid #ddd", borderRadius: 6, padding: 8 }}>
              <strong>{p.name}</strong>
              <div>{p.location}</div>
              <small>Inicio: {new Date(p.startsAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
