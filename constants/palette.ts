/**
 * Mirrors the CSS variables in global.css (:root / .dark).
 *
 * This exists only because a few React Native APIs (Tabs/Stack
 * screenOptions, native headers) take raw style objects and can't read
 * Tailwind/NativeWind classNames — and nativewind's useUnstableNativeVariable
 * throws unconditionally on web (see its web implementation: it always
 * throws "not supported in web"), so it isn't safe to use here in a
 * universal app. Everywhere else, use className="bg-background" etc.
 * directly.
 *
 * If you change a color in global.css, update it here too.
 */
export const palette = {
	light: {
		background: "#ffffff",
		foreground: "#111827",
		primary: "#6cca8e",
		primaryForeground: "#ffffff",
		secondary: "#f3f4f6",
		secondaryForeground: "#111827",
		muted: "#f8fafc",
		muted50: "#17171a",
		mutedForeground: "#64748b",
		card: "#ffffff",
		cardForeground: "#111827",
		border: "#e5e7eb",
	},
	dark: {
		background: "#09090b",
		foreground: "#fafafa",
		primary: "#22b662",
		primaryForeground: "#ffffff",
		secondary: "#18181b",
		secondaryForeground: "#fafafa",
		muted: "#27272a",
		muted50: "#17171a",
		mutedForeground: "#a1a1aa",
		card: "#18181b",
		cardForeground: "#fafafa",
		border: "#27272a",
	},
} as const;

export type ResolvedThemeName = keyof typeof palette;