import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { setUserLocation } from "../src/services/location";

export default function Radar() {
  const [pos, setPos] = useState<Location.LocationObjectCoords | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") { setStatus("Permiso denegado"); return; }
      const l = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
      setPos(l.coords);
    })();
  }, []);

  const publish = async () => {
    if (!pos) return;
    setStatus("Publicando ubicación...");
    await setUserLocation({ lat: pos.latitude, lng: pos.longitude });
    setStatus("Ubicación publicada");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ color: "#fff", fontSize: 22 }}>Radar</Text>
      <View style={{ flex: 1, borderColor: "#222", borderWidth: 1, borderRadius: 8, marginTop: 12, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#888" }}>Mapa oscuro (placeholder)</Text>
        {pos && <Text style={{ color: "#7df", marginTop: 8 }}>Lat: {pos.latitude.toFixed(5)} Lng: {pos.longitude.toFixed(5)}</Text>}
      </View>
      <TouchableOpacity onPress={publish} style={{ backgroundColor: "#111", padding: 12, borderRadius: 8, marginTop: 12 }}>
        <Text style={{ color: "#7df", textAlign: "center" }}>Estoy aquí / Ayuda</Text>
      </TouchableOpacity>
      {status && <Text style={{ color: "#ccc", marginTop: 8 }}>{status}</Text>}
    </View>
  );
}
