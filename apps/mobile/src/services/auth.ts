import { getAuthInstance } from "./firebase";
import { signInAnonymously } from "firebase/auth";

export async function anonymousLogin() {
  const res = await signInAnonymously(getAuthInstance());
  return res.user;
}
