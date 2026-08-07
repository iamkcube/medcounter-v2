import { ThemedText } from "@/components/themed-text";
import { LucideIcon } from "lucide-react-native";
import { View } from "react-native";

interface DetailsCardProps {
  icon?: LucideIcon;
  title: string;
  info: string;
}

export function DetailsCard({ icon: Icon, title, info }: DetailsCardProps) {
  return (
    <View className="flex gap-2 p-3 bg-muted/25 border border-muted rounded">
      <View className="flex flex-row gap-1 items-center">
        {Icon && <Icon className="text-muted-foreground" size={16} />}
        <ThemedText className="text-muted-foreground uppercase font-sans-medium">
          {title}
        </ThemedText>
      </View>
      <ThemedText className="font-sans-bold">{info}</ThemedText>
    </View>
  );
}
