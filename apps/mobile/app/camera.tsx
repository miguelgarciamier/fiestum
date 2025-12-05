import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { uploadPhoto } from "../src/services/storage";

export default function Camera() {
  const [status, setStatus] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const pick = async () => {
    const perms = await ImagePicker.requestCameraPermissionsAsync();
    if (perms.status !== "granted") { setStatus("Permiso de cámara denegado"); return; }
    const res = await ImagePicker.launchCameraAsync({ quality: 0.6 });
    if (res.canceled) return;
    const asset = res.assets?.[0];
    if (!asset?.uri) return;
    setPreview(asset.uri);
    setStatus("Subiendo...");
    const url = await uploadPhoto(asset.uri);
    setStatus(`Subido: ${url}`);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ color: "#fff", fontSize: 22 }}>Cámara rápida</Text>
      <TouchableOpacity onPress={pick} style={{ backgroundColor: "#111", padding: 12, borderRadius: 8, marginTop: 12 }}>
        <Text style={{ color: "#7df", textAlign: "center" }}>Tomar foto</Text>
      </TouchableOpacity>
      {preview && (
        <Image source={{ uri: preview }} style={{ width: "100%", height: 240, marginTop: 12, borderRadius: 8 }} />
      )}
      {status && <Text style={{ color: "#ccc", marginTop: 8 }}>{status}</Text>}
    </View>
  );
}
