export async function login(email: string, password: string) {
  if (!email || !password) throw new Error("Email y contraseña requeridos");
  // Phase 1: stub success
  await new Promise((r) => setTimeout(r, 500));
  return { email };
}

export async function logout() {
  await new Promise((r) => setTimeout(r, 100));
}
