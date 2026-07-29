import { ThemedText } from "@/components/themed-text";
import { ChevronRight, Clock3, Pill } from "lucide-react-native";
import { Pressable, View } from "react-native";

interface MedicineCardProps {
	name: string;
	strength: string;
	remainingTablets: number;
	totalTablets: number;
	daysLeft: number;
	timing: string;
	dosage: string;
	finishDate: string;
}

const ACCENT = {
	container: "bg-emerald-500/10 border-emerald-500/20",
	text: "text-emerald-400",
	bar: "bg-emerald-400",
	dot: "bg-emerald-400",
	stripe: "bg-emerald-400",
};

export default function MedicineCard({
	name,
	strength,
	remainingTablets,
	totalTablets,
	daysLeft,
	timing,
	dosage,
	finishDate,
}: MedicineCardProps) {
	const percentage = Math.round((remainingTablets / totalTablets) * 100);

	return (
		<Pressable className="relative mx-1 mb-3 rounded-xl border border-border bg-card p-4 active:opacity-90">
			<View
				className={`absolute bottom-3 left-0 top-3 w-0.5 rounded-r-full ${ACCENT.stripe}`}
			/>

			<View className="pl-3">
				<View className="mb-3 flex-row justify-between">
					<View className="flex-1 flex-row gap-3 items-center">
						<View
							className={`h-8 w-8 items-center justify-center rounded-lg border ${ACCENT.container}`}
						>
							<Pill
								size={16}
								className={ACCENT.text}
							/>
						</View>

						<View className="flex-1 gap-1">
							<ThemedText className="text-base font-semibold">
								{name}
							</ThemedText>

							<ThemedText className="text-xs text-muted-foreground">
								{strength}
							</ThemedText>
						</View>
					</View>

					<View className="items-end">
						<View className="flex-row items-center gap-2">
							<View className="flex-row items-center gap-1">
								<View
									className={`h-1.5 w-1.5 rounded-full ${ACCENT.dot}`}
								/>

								<ThemedText className={ACCENT.text}>
									{daysLeft} days left
								</ThemedText>
							</View>

							<ChevronRight
								size={16}
								className="text-muted-foreground"
							/>
						</View>
					</View>
				</View>

				<View className="mb-3">
					<View className="mb-1.5 flex-row justify-between">
						<ThemedText className="text-xs text-muted-foreground">
							{remainingTablets} / {totalTablets} tablets
						</ThemedText>

						<ThemedText className="text-xs text-muted-foreground">
							{percentage}%
						</ThemedText>
					</View>

					<View className="h-1.5 overflow-hidden rounded-full bg-muted">
						<View
							className={ACCENT.bar}
							style={{
								width: `${percentage}%`,
								height: "100%",
							}}
						/>
					</View>
				</View>

				<View className="flex-row items-center justify-between">
					<View className="flex-row items-center gap-3">
						<View className="flex-row items-center gap-1">
							<Clock3
								size={12}
								className="text-muted-foreground"
							/>

							<ThemedText className="text-xs text-muted-foreground">
								{timing}
							</ThemedText>
							<ThemedText className="pl-4 text-xs text-muted-foreground">
								{dosage}
							</ThemedText>
						</View>
					</View>

					<ThemedText className="text-xs text-muted-foreground">
						Finishes {finishDate}
					</ThemedText>
				</View>
			</View>
		</Pressable>
	);
}
