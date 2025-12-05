import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 16, display: "grid", gap: 12 }}>
      <h1>NightOps</h1>
      <p>Bienvenido. Accede al mapa, cámara o fiestas.</p>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link href="/(auth)/login">Login</Link>
        <Link href="/(main)/map">Mapa</Link>
        <Link href="/(main)/camera">Cámara</Link>
        <Link href="/(main)/party">Fiestas</Link>
      </nav>
    </main>
  );
}
