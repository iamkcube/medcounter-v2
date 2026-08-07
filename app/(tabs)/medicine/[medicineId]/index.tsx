import { ThemedButton } from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { DetailsCard } from "@/components/ui/details-card";
import { ACCENT } from "@/components/ui/medicine-card";
import { router, useLocalSearchParams } from "expo-router";
import {
	CalendarDays,
	Clock3,
	MinusCircle,
	Pause,
	Pencil,
	Pill,
	PlusCircle,
	Repeat,
	Trash2,
	TrendingDown,
	X,
} from "lucide-react-native";
import { Pressable, View } from "react-native";

export default function MedicinePage() {
	const { medicineId } = useLocalSearchParams<{ medicineId: string }>();

	return (
		<View className="flex gap-4 p-4">
			<View className="flex flex-row justify-between items-center">
				<View className="flex flex-row gap-2 items-center">
					<View
						className={`h-8 w-8 items-center justify-center rounded border ${ACCENT.container}`}
					>
						<Pill
							size={12}
							className={ACCENT.text}
						/>
					</View>
					<ThemedText className="text-base font-semibold">
						{medicineId}
					</ThemedText>
				</View>
				<View className="flex flex-row gap-4 items-center">
					<Pressable
						className="items-center justify-center"
						onPress={() =>
							router.push({
								pathname: "/medicine/[medicineId]/edit",
								params: { medicineId: medicineId as string },
							})
						}
					>
						<Pencil
							size={18}
							className="text-muted-foreground"
						/>
					</Pressable>
					<Pressable
						className="items-center justify-center"
						onPress={() => router.navigate("/")}
					>
						<X
							size={18}
							className="text-muted-foreground"
						/>
					</Pressable>
				</View>
			</View>
			<View className="flex items-center gap-2 text-foreground bg-destructive/5 p-4 border border-destructive/40 rounded-xl">
				<View className="flex flex-row gap-1 items-center w-full">
					<X
						className="text-destructive"
						size={16}
					/>
					<ThemedText className="font-sans-semibold text-destructive">
						Critical -
					</ThemedText>
					<ThemedText className="font-sans-semibold text-destructive uppercase">
						Refill Now
					</ThemedText>
					<ThemedText className="text-xl font-sans-bold ml-auto">
						40d
					</ThemedText>
				</View>
				<View className="flex flex-row bg-muted h-2 w-full rounded-full overflow-hidden">
					<View className="flex basis-2 bg-destructive h-full rounded-full"></View>
				</View>
				<View className="flex flex-row justify-between items-center w-full">
					<ThemedText className="text-muted-foreground text-xs">
						2 remaining
					</ThemedText>
					<ThemedText className="text-muted-foreground text-xs">
						out of 30
					</ThemedText>
				</View>
			</View>
			<View className="grid grid-cols-2 gap-2">
				{details.map((item) => (
					<DetailsCard
						key={item.title}
						{...item}
					/>
				))}
			</View>
			<View className="flex gap-2 p-3 bg-muted/25 border border-muted rounded">
				<View className="flex flex-row gap-1 items-center">
					<ThemedText className="text-muted-foreground font-sans-medium">
						Refill alert threshold
					</ThemedText>
				</View>
				<ThemedText className="font-sans-bold">
					7 days before finish
				</ThemedText>
			</View>
			<View className="mt-4 flex gap-3">
				<ThemedText className="text-muted-foreground uppercase font-sans-medium">
					Quick Actions
				</ThemedText>
				<View className="flex gap-2">
					<ThemedButton
						variant="secondary"
						align="start"
						disabled
						leftIcon={MinusCircle}
					>
						Record Dose Taken
					</ThemedButton>
					<ThemedButton
						variant="success"
						align="start"
						leftIcon={PlusCircle}
					>
						Refill Stock
					</ThemedButton>
					<ThemedButton
						variant="secondary"
						align="start"
						leftIcon={Pause}
					>
						Pause Tracking
					</ThemedButton>
					<ThemedButton
						variant="danger"
						align="start"
						leftIcon={Trash2}
					>
						Delete Medicine
					</ThemedButton>
				</View>
			</View>
		</View>
	);
}

const details = [
	{
		icon: TrendingDown,
		title: "Daily Usage",
		info: "6 tabs",
	},
	{
		icon: CalendarDays,
		title: "Finishes",
		info: "Today",
	},
	{
		icon: Clock3,
		title: "Reminder",
		info: "8:00 AM",
	},
	{
		icon: Repeat,
		title: "Frequency",
		info: "Twice daily",
	},
];
