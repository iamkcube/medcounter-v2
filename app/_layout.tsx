import "@/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { Platform } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [webFontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
  });

  const fontsReady = Platform.OS === "web" ? webFontsLoaded : true;

  useEffect(() => {
    if (fontsReady) SplashScreen.hideAsync();
  }, [fontsReady]);

  if (!fontsReady) return null;

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

// import "@/global.css";
// // import { PortalHost } from "@rn-primitives/portal";
// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import "react-native-reanimated";

// import { palette } from "@/constants/palette";
// import { ThemeProvider, useTheme } from "@/lib/theme/ThemeProvider";

// export const unstable_settings = {
// 	anchor: "(tabs)",
// };

// function RootStack() {
// 	// Stack.Screen content is its own opaque surface with its own
// 	// backgroundColor (defaults to white) — it paints OVER any wrapping
// 	// View, so bg-background on a parent View never shows through. Set
// 	// the background at the navigator level via contentStyle instead.
// 	// (Not using useUnstableNativeVariable here — its web implementation
// 	// unconditionally throws, so it's unsafe in a universal app.)
// 	const { resolvedTheme } = useTheme();
// 	const colors = palette[resolvedTheme];

// 	return (
// 		<Stack
// 			screenOptions={{
// 				contentStyle: { backgroundColor: colors.background },
// 			}}
// 		>
// 			<Stack.Screen
// 				name="(tabs)"
// 				options={{ headerShown: false }}
// 			/>
// 			<Stack.Screen
// 				name="modal"
// 				options={{ presentation: "modal", title: "Modal" }}
// 			/>
// 		</Stack>
// 	);
// }

// export default function RootLayout() {
// 	return (
// 		<ThemeProvider>
// 			<RootStack />
// 			<StatusBar style="auto" />
// 			{/* <PortalHost /> */}
// 		</ThemeProvider>
// 	);
// }
