import { ThemedButton } from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { BellRing, Heart } from "lucide-react-native";
import { Button, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="flex flex-row items-center gap-2 px-4 py-2">
        <ThemedText className="text-lg font-sans-bold text-foreground">
          Settings
        </ThemedText>
      </View>

      <View className="p-4 flex-1">
        <View className="flex gap-2">
          <View className="flex flex-row gap-2 px-1">
            <BellRing size={16} className="text-muted-foreground" />
            <ThemedText className="uppercase text-muted-foreground font-sans-semibold">
              Push Notifications
            </ThemedText>
          </View>
          <View className="bg-foreground/3 border border-foreground/10 p-4 rounded flex-row justify-between items-center">
            <View className="flex gap-0 5">
              <ThemedText className="font-sans-medium">Disabled</ThemedText>
              <ThemedText className="text-xs text-muted-foreground">
                Get notified when medicines run low
              </ThemedText>
            </View>
            <ThemedButton>Enable</ThemedButton>
          </View>
        </View>
      </View>

      <View className="p-4">
        <View className="bg-foreground/3 border border-foreground/10 p-4 rounded flex gap-0.5 items-center justify-center">
          <View className="flex flex-row gap-1 items-start justify-center">
            <Heart className="text-destructive/30" size={16} />
            <ThemedText className="text-muted-foreground font-sans-medium">
              Made with love
            </ThemedText>
          </View>
          <ThemedText className="text-xs text-muted-foreground/50">
            MedCounter v2.0 · Never run out again
          </ThemedText>
        </View>
      </View>
    </View>
  );
}
