import { Moon, Smartphone, Sun } from "lucide-react-native";
import { Pressable, View } from "react-native";

import { Theme, useTheme } from "@/lib/theme/ThemeProvider";

const OPTIONS: { value: Theme; label: string; icon: typeof Sun }[] = [
	{ value: "light", label: "Light", icon: Sun },
	{ value: "system", label: "System", icon: Smartphone },
	{ value: "dark", label: "Dark", icon: Moon },
];

// lucide-react-native icons render as SVGs and don't reliably resolve
// `className`-based text colors, so we pass explicit hex values instead.
// These mirror the --foreground / --muted-foreground values in global.css.
const ICON_COLOR = {
	light: { active: "#111827", inactive: "#64748b" },
	dark: { active: "#fafafa", inactive: "#a1a1aa" },
} as const;

/**
 * Segmented light / dark / system theme switcher.
 * Reads and writes through the app's ThemeProvider, so it stays in
 * sync with persistence and platform-specific color scheme handling.
 */
export function ThemeToggle() {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const colors = ICON_COLOR[resolvedTheme];

	return (
		<View className="flex-row rounded-full bg-secondary p-1">
			{OPTIONS.map(({ value, label, icon: Icon }) => {
				const isActive = theme === value;

				return (
					<Pressable
						key={value}
						onPress={() => setTheme(value)}
						accessibilityRole="button"
						accessibilityLabel={`${label} theme`}
						accessibilityState={{ selected: isActive }}
						className={`flex-1 flex-row items-center justify-center rounded-full px-3 py-2 ${
							isActive ? "bg-background" : ""
						}`}
					>
						<Icon
							size={16}
							color={isActive ? colors.active : colors.inactive}
						/>
					</Pressable>
				);
			})}
		</View>
	);
}
