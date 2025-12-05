import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { createRoom, joinRoom } from "../src/services/rooms";

export default function Room() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ color: "#fff", fontSize: 22 }}>Sala</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Nombre de sala" placeholderTextColor="#666" style={{ color: "#fff", borderColor: "#333", borderWidth: 1, borderRadius: 8, padding: 8 }} />
      <TouchableOpacity onPress={async () => { setStatus("Creando..."); const room = await createRoom(name); setStatus(`Creada: ${room.code}`); }} style={{ backgroundColor: "#111", padding: 12, borderRadius: 8 }}>
        <Text style={{ color: "#7df", textAlign: "center" }}>Crear sala</Text>
      </TouchableOpacity>
      <TextInput value={code} onChangeText={setCode} placeholder="Código de sala" placeholderTextColor="#666" style={{ color: "#fff", borderColor: "#333", borderWidth: 1, borderRadius: 8, padding: 8 }} />
      <TouchableOpacity onPress={async () => { setStatus("Uniendo..."); await joinRoom(code); setStatus("Unido"); }} style={{ backgroundColor: "#111", padding: 12, borderRadius: 8 }}>
        <Text style={{ color: "#7df", textAlign: "center" }}>Unirse a sala</Text>
      </TouchableOpacity>
      {status && <Text style={{ color: "#ccc" }}>{status}</Text>}
    </View>
  );
}
