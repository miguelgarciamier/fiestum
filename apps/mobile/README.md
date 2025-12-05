# NightOps Mobile (Expo) — Fase 1

Aplicación móvil Expo (React Native) con las funciones del MVP:
- Login anónimo (Firebase Auth)
- Crear/Unirse a sala (Firestore)
- Radar: ubicación y botón "Estoy aquí/Ayuda" (Expo Location + RTDB)
- Cámara rápida y subida de foto (Expo ImagePicker + Storage)

## Ejecutar
```powershell
# Instalar Node (si no está instalado)
winget install OpenJS.NodeJS.LTS

# Instalar Expo CLI (opcional)
npm install -g expo-cli

# Instalar dependencias del proyecto móvil
cd "c:\Users\VW862MN\OneDrive - EY\Desktop\NightOps\apps\mobile"
npm install

# Variables de entorno (crear .env en apps/mobile)
# EXPO_PUBLIC_FIREBASE_API_KEY=...
# EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=...
# EXPO_PUBLIC_FIREBASE_PROJECT_ID=...
# EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=...
# EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
# EXPO_PUBLIC_FIREBASE_APP_ID=...
# EXPO_PUBLIC_FIREBASE_DATABASE_URL=...

# Iniciar el proyecto
npm run start
```

## Navegación
- Home: enlaces a `login`, `room`, `radar`, `camera`
- Diseño dark por defecto

## Roadmap de siguiente fase
- Mapbox SDK para mapa oscuro real
- Vincular UID real tras login anónimo en servicios
- Deep Links/QRs para onboarding
- Modo fantasma e intervalos de actualización
- Feed de eventos (subidas y misiones)