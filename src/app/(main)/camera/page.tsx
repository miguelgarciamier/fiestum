"use client";
import { useRef, useState } from "react";
import { uploadImage } from "@/features/camera/services/uploadService";
import { Button } from "@/components/ui/Button";

export default function CameraPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handlePick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus("Subiendo...");
    try {
      const url = await uploadImage(file);
      setStatus(`Subido: ${url}`);
    } catch (err: any) {
      setStatus(err?.message ?? "Error al subir la imagen");
    } finally {
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <main style={{ padding: 16 }}>
      <h2>Cámara</h2>
      <input ref={inputRef} type="file" accept="image/*" onChange={handlePick} />
      <div style={{ marginTop: 12 }}>{status}</div>
      <Button onClick={() => inputRef.current?.click()}>Elegir imagen</Button>
    </main>
  );
}
