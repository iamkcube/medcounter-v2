import { ThemedText } from "@/components/themed-text";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { TriangleAlert } from "lucide-react-native";
import { View } from "react-native";

dayjs.extend(relativeTime);

export interface Notification {
  id: string;
  notificationHeading: string;
  notificationText: string;
  notificationDateTime: string;
}

export function NotificationCard({
  id,
  notificationHeading,
  notificationText,
  notificationDateTime,
}: Notification) {
  return (
    <View className="flex flex-row items-center gap-2 text-foreground bg-destructive/5 p-4 border border-destructive/40 rounded-xl">
      <TriangleAlert className="text-destructive" />
      <ThemedText className="flex flex-col">
        <ThemedText className="text-base">{notificationHeading}</ThemedText>
        <ThemedText className="text-xs text-muted-foreground">
          {notificationText}
        </ThemedText>
      </ThemedText>
      <ThemedText className="ml-auto">
        {dateAgoCalculator(notificationDateTime)}
      </ThemedText>
    </View>
  );
}

function dateAgoCalculator(date: string): string {
  const currDate = dayjs(date);
  return currDate.fromNow();
}
