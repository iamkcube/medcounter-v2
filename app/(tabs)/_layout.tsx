import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/haptic-tab";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Bell, LayoutGrid, Settings } from "lucide-react-native";
import TopBar from "@/components/top-bar";

export default function TabLayout() {
	const colorScheme = useColorScheme() ?? "light";

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
				headerShown: true,
				header: () => <TopBar />,
				headerTitleStyle: {
					fontFamily: Fonts.bold,
				},
				tabBarStyle: {
					backgroundColor: Colors[colorScheme].background,
				},
				tabBarIconStyle: {
					color: Colors[colorScheme].tabIconDefault,
				},
				tabBarLabelStyle: {
					fontFamily: Fonts.medium,
				},
				tabBarButton: HapticTab,
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
		</Tabs>
	);
}
