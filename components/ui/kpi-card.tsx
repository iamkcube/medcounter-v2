import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { LucideIcon } from "lucide-react-native";
import { useColorScheme, View } from "react-native";

interface KPICardProps {
	icon: LucideIcon;
	amount: number;
	title: string;
}

export default function KPICard({ icon: Icon, amount, title }: KPICardProps) {
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
			<Icon
				size={16}
				color={Colors[colorScheme].text}
			/>
			<ThemedText>{amount}</ThemedText>
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
