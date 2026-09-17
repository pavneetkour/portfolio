import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0A0B10" }}>
      <StatusBar style="light" />
      <AnimatedSplashOverlay />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#0A0B10" },
        }}
      >
        <Stack.Screen
          name="project/[id]"
          options={{ animation: "slide_from_right", presentation: "card" }}
        />
      </Stack>
    </SafeAreaView>
  );
}
