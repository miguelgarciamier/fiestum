import { rtdb } from "./firebase";
import { ref, set } from "firebase/database";

export async function setUserLocation(pos: { lat: number; lng: number }) {
  const uid = "demo-user"; // Phase 1: replace after auth
  await set(ref(rtdb, `locations/${uid}`), { ...pos, ts: Date.now() });
}
