import { Tabs } from "expo-router";
import { Bell, LayoutGrid, Settings } from "lucide-react-native";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import TopBar from "@/components/top-bar";
import { palette } from "@/constants/palette";
import { Fonts } from "@/constants/theme";
import { useTheme } from "@/lib/theme/ThemeProvider";

export default function TabLayout() {
  const { resolvedTheme } = useTheme();
  const colors = palette[resolvedTheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: true,
        header: () => <TopBar />,
        headerTitleStyle: {
          fontFamily: Fonts.bold,
          color: colors.foreground,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          fontFamily: Fonts.medium,
        },
        tabBarButton: HapticTab,
        // Each tab's screen content is its own opaque surface - it
        // needs the background set here, not just on a wrapping View
        // inside the screen.
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Medicines",
          tabBarIcon: ({ color }) => <LayoutGrid size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: "Alerts",
          tabBarIcon: ({ color }) => <Bell size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Settings size={20} color={color} />,
        }}
      />
      <Tabs.Screen name="medicine" options={{ href: null }} />
    </Tabs>
  );
}
