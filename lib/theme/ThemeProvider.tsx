import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	createContext,
	PropsWithChildren,
	use,
	useEffect,
	useMemo,
	useState,
} from "react";
import {
	Appearance,
	Platform,
	useColorScheme as useRNColorScheme,
} from "react-native";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

type ThemeContextType = {
	/** The user's selected preference: "light" | "dark" | "system" */
	theme: Theme;
	/** The actual applied theme, after resolving "system" */
	resolvedTheme: ResolvedTheme;
	setTheme: (theme: Theme) => Promise<void>;
};

const STORAGE_KEY = "theme";

const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * Applies a resolved color scheme so `dark:` classes pick it up.
 *
 * - Native (iOS/Android): Appearance.setColorScheme() is the documented v5
 *   API and updates useColorScheme() everywhere reactively.
 * - Web: react-native-web does not implement Appearance.setColorScheme
 *   (github.com/necolas/react-native-web/issues/2703), and NativeWind's
 *   web output reads the `dark` class on <html> directly, so we toggle
 *   that class ourselves instead.
 */
function applyColorScheme(scheme: ResolvedTheme | null) {
	if (Platform.OS === "web") {
		if (typeof document === "undefined") return;

		const root = document.documentElement;

		if (scheme === "dark") {
			root.classList.add("dark");
		} else if (scheme === "light") {
			root.classList.remove("dark");
		} else {
			// "system" on web: follow the media query ourselves since there's
			// no native OS hook to defer to.
			const prefersDark = window.matchMedia?.(
				"(prefers-color-scheme: dark)",
			).matches;
			root.classList.toggle("dark", !!prefersDark);
		}

		return;
	}

	Appearance.setColorScheme(scheme);
}

export function ThemeProvider({ children }: PropsWithChildren) {
	const systemColorScheme = useRNColorScheme();

	const [theme, setThemeState] = useState<Theme>("system");
	const [hasHydrated, setHasHydrated] = useState(false);

	// On mount: load saved preference (or default to system) and apply it.
	useEffect(() => {
		let isMounted = true;

		(async () => {
			const saved = await AsyncStorage.getItem(STORAGE_KEY);
			const initial: Theme =
				saved === "light" || saved === "dark" || saved === "system"
					? saved
					: "system";

			if (!isMounted) return;

			setThemeState(initial);
			applyColorScheme(initial === "system" ? null : initial);
			setHasHydrated(true);
		})();

		return () => {
			isMounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Web has no OS-level "follow system" hook, so when the preference is
	// "system" we listen to the media query ourselves and re-apply on change.
	useEffect(() => {
		if (Platform.OS !== "web" || theme !== "system") return;
		if (typeof window === "undefined" || !window.matchMedia) return;

		const mql = window.matchMedia("(prefers-color-scheme: dark)");
		const listener = () => applyColorScheme(null);

		mql.addEventListener("change", listener);
		return () => mql.removeEventListener("change", listener);
	}, [theme]);

	async function setTheme(nextTheme: Theme) {
		setThemeState(nextTheme);

		await AsyncStorage.setItem(STORAGE_KEY, nextTheme);

		applyColorScheme(nextTheme === "system" ? null : nextTheme);
	}

	// On native, RN's useColorScheme reflects Appearance directly. On web
	// we track it via the "dark" class we control, falling back to the
	// hook's value if we haven't hydrated yet.
	const [webIsDark, setWebIsDark] = useState(false);

	useEffect(() => {
		if (Platform.OS !== "web" || typeof document === "undefined") return;

		const root = document.documentElement;
		setWebIsDark(root.classList.contains("dark"));

		const observer = new MutationObserver(() => {
			setWebIsDark(root.classList.contains("dark"));
		});
		observer.observe(root, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => observer.disconnect();
	}, []);

	const resolvedTheme: ResolvedTheme =
		Platform.OS === "web"
			? webIsDark
				? "dark"
				: "light"
			: systemColorScheme === "dark"
				? "dark"
				: "light";

	const value = useMemo(
		() => ({
			theme,
			resolvedTheme,
			setTheme,
		}),
		[theme, resolvedTheme],
	);

	// Avoid a flash of the wrong theme before AsyncStorage resolves.
	if (!hasHydrated) return null;

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = use(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}

	return context;
}
