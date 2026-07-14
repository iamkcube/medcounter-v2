/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#2ba168';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    iconBackground: '#232323',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#0a0a0a',
    tint: tintColorDark,
    icon: '#484d51',
    iconBackground: '#232323',
    tabIconDefault: '#484d51',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = {
  thin: "DMSans_100Thin",
  extraLight: "DMSans_200ExtraLight",
  light: "DMSans_300Light",
  regular: "DMSans_400Regular",
  medium: "DMSans_500Medium",
  semiBold: "DMSans_600SemiBold",
  bold: "DMSans_700Bold",
  extraBold: "DMSans_800ExtraBold",
  black: "DMSans_900Black",
};