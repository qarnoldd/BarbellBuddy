import "@/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto_CondensedLight: require("../assets/fonts/Roboto_Condensed-Light.ttf"),
    Roboto_CondensedMedium: require("../assets/fonts/Roboto_Condensed-Medium.ttf"),
    RobotoBoldItalic: require("../assets/fonts/Roboto-BoldItalic.ttf"),
    RobotoExtraLight: require("../assets/fonts/Roboto-ExtraLight.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="routines/createroutine"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="routines/addday" options={{ headerShown: false }} />
      <Stack.Screen name="workout" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
