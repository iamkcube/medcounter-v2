import { ThemedText } from "@/components/themed-text";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { Pill } from "lucide-react-native";
import { View } from "react-native";

interface MedicineCardProps {
	name: string;
	strength: string;
	remainingTablets: number;
	totalTablets: number;
	daysLeft: number;
	dosage: string;
	finishDate: string;
}

export default function MedicineCard({
	name,
	strength,
	remainingTablets,
	totalTablets,
	daysLeft,
	dosage,
	finishDate,
}: MedicineCardProps) {
	const colorScheme = useColorScheme() ?? "light";

	return (
		<View className="flex m-1 p-4 gap-0.5 bg-[#121212] border border-1 border-[#333] rounded-xl">
			<View className="flex flex-row gap-1">
				<Pill
					size={32}
					className="bg-blue-600/10 text-blue-600 border border-blue-600/30 p-1.5 rounded-lg aspect-square items-center justify-center"
				/>
				<View className="flex gap-1">
					<ThemedText className="text-lg text-white font-bold">
						{name}
					</ThemedText>
					<ThemedText className="text-sm text-blue-200">
						{strength}
					</ThemedText>
				</View>
			</View>
			<ThemedText>{remainingTablets}</ThemedText>
			<ThemedText>{totalTablets}</ThemedText>
			<ThemedText>{daysLeft}</ThemedText>
			<ThemedText>
				{((daysLeft * 100) / totalTablets).toFixed(0)}%
			</ThemedText>
			<ThemedText>{dosage}</ThemedText>
			<ThemedText>{finishDate}</ThemedText>
		</View>
	);
}
