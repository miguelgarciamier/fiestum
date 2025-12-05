import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { anonymousLogin } from "../src/services/auth";

export default function Login() {
  const [status, setStatus] = useState<string | null>(null);

  const handleLogin = async () => {
    setStatus("Autenticando...");
    try {
      const user = await anonymousLogin();
      setStatus(`OK: ${user.uid}`);
    } catch (e: any) {
      const msg = e?.message ?? "Error";
      const hint = msg.includes("Firebase config missing")
        ? "Configura apps/mobile/.env con las claves EXPO_PUBLIC_FIREBASE_*"
        : null;
      setStatus(hint ? `${msg}. ${hint}` : msg);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ color: "#fff", fontSize: 22 }}>Login anónimo</Text>
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#111", padding: 12, borderRadius: 8 }}>
        <Text style={{ color: "#7df", textAlign: "center" }}>Entrar</Text>
      </TouchableOpacity>
      {status && <Text style={{ color: "#ccc" }}>{status}</Text>}
    </View>
  );
}
