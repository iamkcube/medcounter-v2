import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { View } from "react-native";

interface MedicineCardProps {
	name: string;
	strength: string;
	remainingTablets: number;
	totalTablets: number;
	daysLeft: number;
	percentageRemaining: number;
	dosage: string;
	finishDate: string;
}

export default function MedicineCard({
	name,
	strength,
	remainingTablets,
	totalTablets,
	daysLeft,
	percentageRemaining,
	dosage,
	finishDate,
}: MedicineCardProps) {
	const colorScheme = useColorScheme() ?? "light";

	return (
		<View
			style={{
				flex: 1,
				margin: 4,
				borderWidth: 1,
				borderColor: Colors[colorScheme].icon,
				borderRadius: 8,
				padding: 16,
				gap: 2,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<ThemedText>{name}</ThemedText>
			<ThemedText
				style={{
					textTransform: "uppercase",
					fontSize: 12,
					lineHeight: 12,
					color: Colors[colorScheme].icon,
				}}
			>
				{title}
			</ThemedText>
		</View>
	);
}
