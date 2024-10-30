import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import * as SystemUI from "expo-system-ui";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(248, 248, 248)",
  },
};

export default function RootLayout(): JSX.Element {
  const colorScheme = useColorScheme();
  const [isLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkTheme : CustomDefaultTheme}
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
