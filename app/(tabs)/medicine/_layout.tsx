import { palette } from "@/constants/palette";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { Stack } from "expo-router";

export default function MedicineLayout() {
  const { resolvedTheme } = useTheme();
  const colors = palette[resolvedTheme];

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="[medicineId]" options={{ title: "Medicine" }} />
    </Stack>
  );
}
