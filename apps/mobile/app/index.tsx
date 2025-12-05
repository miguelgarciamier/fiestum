import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>NightOps</Text>
      <Text style={{ color: "#ccc" }}>Elige una sección:</Text>
      <View style={{ gap: 8 }}>
        <Link href="/login" style={{ color: "#7df" }}>Login anónimo</Link>
        <Link href="/room" style={{ color: "#7df" }}>Crear/Unirse a sala</Link>
        <Link href="/radar" style={{ color: "#7df" }}>Radar (Mapa + Feed)</Link>
        <Link href="/camera" style={{ color: "#7df" }}>Cámara</Link>
      </View>
    </View>
  );
}
