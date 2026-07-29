import { ThemeToggle } from "@/components/theme-toggle";
import { ThemedText } from "@/components/themed-text";
import { palette } from "@/constants/palette";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { Dot, LogOut, Pill } from "lucide-react-native";
import { Pressable, View } from "react-native";

export default function TopBar() {
  const { resolvedTheme } = useTheme();
  const colors = palette[resolvedTheme];

  return (
    <View className="flex flex-row p-4 justify-between items-center">
      <View className="flex-row items-center gap-3">
        <Pill
          size={32}
          color={colors.primary}
          className="p-2 rounded-lg aspect-square items-center bg-card justify-center"
        />
        <View className="justify-center gap-0">
          <ThemedText className="text-lg font-sans-semibold">
            MedCounter
          </ThemedText>
          <ThemedText className="text-xs leading-3 text-foreground">
            Smart refill tracker
          </ThemedText>
        </View>
      </View>

      <View className="flex-row gap-4">
        <ThemeToggle />

        <View className="flex-row py-1 pl-1 pr-4 rounded-full items-center bg-secondary">
          <Dot color={colors.primary} />
          <ThemedText className="text-xs text-foreground">
            Synced
          </ThemedText>
        </View>

        <Pressable
          className="items-center justify-center"
          onPress={() => null}
        >
          <LogOut size={18} className="text-foreground"/>
        </Pressable>
      </View>
    </View>
  );
}
