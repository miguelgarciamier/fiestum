export async function getUserLocation(): Promise<{ lat: number; lng: number }> {
  if (typeof window === "undefined") throw new Error("No disponible en SSR");
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocalización no soportada"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => reject(new Error(err.message || "Error de geolocalización")),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
}
