import { getStorageInstance } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as FileSystem from "expo-file-system";

export async function uploadPhoto(uri: string): Promise<string> {
  const name = `photo_${Date.now()}.jpg`;
  const fileRef = ref(getStorageInstance(), name);
  const data = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
  const bytes = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
  await uploadBytes(fileRef, bytes, { contentType: "image/jpeg" });
  return await getDownloadURL(fileRef);
}
