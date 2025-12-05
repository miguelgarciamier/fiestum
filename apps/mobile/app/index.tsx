import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";

const actions = [
  { label: "Login anónimo", href: "/login" },
  { label: "Crear / Unirse a sala", href: "/party" },
  { label: "Radar", href: "/radar" },
  { label: "Cámara rápida", href: "/camera" },
];

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-night-900 px-6 py-10">
      <View className="flex-1 justify-center">
        <Text className="text-neon-pink text-3xl font-bold mb-2">
          NightOps
        </Text>
        <Text className="text-slate-200 text-base mb-8">
          Elige tu siguiente movimiento de la noche.
        </Text>

        <View className="gap-4">
          {actions.map((action) => (
            <Link href={action.href} asChild key={action.href}>
              <Pressable className="w-full py-4 rounded-2xl bg-night-800 border border-neon-pink active:bg-night-700">
                <Text className="text-center text-slate-50 text-base font-semibold">
                  {action.label}
                </Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </View>

      <View className="mt-10">
        <Text className="text-xs text-slate-500">
          Modo drunk-proof activado. Botones grandes, pocas decisiones.
        </Text>
      </View>
    </View>
  );
}
