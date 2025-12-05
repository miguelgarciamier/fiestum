"use client";
import { useState } from "react";
import { login } from "@/core/auth/authService";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Cargando...");
    try {
      await login(email, password);
      setStatus("Acceso correcto");
    } catch (err: any) {
      setStatus(err?.message ?? "Error de acceso");
    }
  };

  return (
    <main style={{ padding: 16 }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, maxWidth: 320 }}>
        <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Entrar</Button>
      </form>
      {status && <p style={{ marginTop: 12 }}>{status}</p>}
    </main>
  );
}
