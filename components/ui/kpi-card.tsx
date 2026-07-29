import { ThemedText } from "@/components/themed-text";
import { LucideIcon } from "lucide-react-native";
import { View } from "react-native";

interface KPICardProps {
	icon: LucideIcon;
	amount: number;
	title: string;
}

export default function KPICard({ icon: Icon, amount, title }: KPICardProps) {
	return (
		<View className="m-1 flex-1 items-center justify-center gap-0.5 rounded-lg border border-border bg-card p-4">
			<Icon
				size={16}
				className="text-foreground"
			/>
			<ThemedText>{amount}</ThemedText>
			<ThemedText className="text-muted-foreground text-xs uppercase leading-3">
				{title}
			</ThemedText>
		</View>
	);
}
