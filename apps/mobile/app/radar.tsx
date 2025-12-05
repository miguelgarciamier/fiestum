import { Slot, Stack } from "expo-router";
import { View, StatusBar } from "react-native";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/lib/queryClient";

// Configuración obligatoria para NativeWind en Web/Móvil
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1 bg-night-900">
        <StatusBar barStyle="light-content" />
        {/* Usamos Stack para navegación nativa fluida */}
        <Stack 
          screenOptions={{
            headerStyle: { backgroundColor: '#0a0a0a' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            contentStyle: { backgroundColor: '#0a0a0a' } // Fondo night-900
          }}
        >
           <Stack.Screen name="index" options={{ headerShown: false }} />
           <Stack.Screen name="login" options={{ title: 'Login' }} />
           <Stack.Screen name="radar" options={{ title: 'Radar Ops', headerTransparent: true }} />
           <Stack.Screen name="camera" options={{ title: 'Cámara' }} />
           <Stack.Screen name="room" options={{ title: 'Sala' }} />
        </Stack>
      </View>
    </QueryClientProvider>
  );
}