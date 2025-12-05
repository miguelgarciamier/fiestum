import { getFirestoreInstance } from "./firebase";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

export async function createRoom(name: string) {
  const code = Math.random().toString(36).slice(2, 7).toUpperCase();
  const ref = await addDoc(collection(getFirestoreInstance(), "rooms"), { name, code, createdAt: Date.now() });
  return { id: ref.id, name, code };
}

export async function joinRoom(code: string) {
  if (!code) throw new Error("Código requerido");
  // Phase 1: minimal validation by code would require query; stub success.
  return true;
}
