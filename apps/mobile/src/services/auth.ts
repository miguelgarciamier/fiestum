import { auth } from "./firebase";
import { signInAnonymously } from "firebase/auth";

export async function anonymousLogin() {
  const res = await signInAnonymously(auth);
  return res.user;
}
