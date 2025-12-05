export const t = (key: string) => {
  const dict: Record<string, string> = {
    "welcome": "Bienvenido",
    "login.title": "Iniciar sesión",
    "map.title": "Mapa",
    "camera.title": "Cámara",
  };
  return dict[key] ?? key;
};
