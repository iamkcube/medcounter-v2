import { ThemedText } from "@/components/themed-text";
import {
  NotificationCard,
  type Notification,
} from "@/components/ui/notification-card";
import { CheckCheck } from "lucide-react-native";
import { FlatList, Pressable, View } from "react-native";

export default function AlertScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="flex flex-row items-center gap-2 px-4 py-2">
        <ThemedText className="text-lg font-sans-bold text-foreground">
          Notifications
        </ThemedText>
        <ThemedText className="bg-muted px-2 py-0.5 text-sm rounded-full text-muted-foreground">
          {notifications.length}
        </ThemedText>
        <Pressable className="ml-auto flex flex-row gap-1">
          <CheckCheck className="text-muted-foreground" size={16} />
          <ThemedText className="text-muted-foreground">
            Mark all read
          </ThemedText>
        </Pressable>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationCard {...item} />}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 32,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  );
}

const notifications: Notification[] = [
  {
    id: "notif_1784775756852_rybv5",
    notificationHeading: "Bisoprolol",
    notificationText: "Only 6 left - refill today!",
    notificationDateTime: "2026-07-23T03:02:36.852Z",
  },
  {
    id: "notif_1784713366173_pnsi7",
    notificationHeading: "Metmorfin",
    notificationText: "Only 0 left - refill today!",
    notificationDateTime: "2026-07-22T09:42:46.173Z",
  },
  {
    id: "notif_1784713366173_fx4c1",
    notificationHeading: "Bisprolol",
    notificationText: "Only 0 left - refill today!",
    notificationDateTime: "2026-07-22T09:42:46.173Z",
  },
  {
    id: "notif_1784713366173_9rmfb",
    notificationHeading: "Saccubitril",
    notificationText: "Only 0 left - refill today!",
    notificationDateTime: "2026-07-22T09:42:46.173Z",
  },
  {
    id: "notif_1784638332041_cjobj",
    notificationHeading: "Planep",
    notificationText: "Only 0 left - refill today!",
    notificationDateTime: "2026-07-21T12:52:12.041Z",
  },
  {
    id: "notif_1772016282322_69o9u",
    notificationHeading: "Saccubitril",
    notificationText: "Only 2 left - refill today!",
    notificationDateTime: "2026-02-25T10:44:42.322Z",
  },
  {
    id: "notif_1772016273177_binra",
    notificationHeading: "Planep",
    notificationText: "5 tablets remaining. Time to refill soon.",
    notificationDateTime: "2026-02-25T10:44:33.177Z",
  },
  {
    id: "notif_1772016273177_binrsa",
    notificationHeading: "Planep",
    notificationText: "5 tablets remaining. Time to refill soon.",
    notificationDateTime: "2026-02-25T10:44:33.177Z",
  },
  {
    id: "notif_1772016263474_1tact",
    notificationHeading: "Metmorfin",
    notificationText: "44 tablets remaining. Time to refill soon.",
    notificationDateTime: "2026-02-25T10:44:23.474Z",
  },
];
