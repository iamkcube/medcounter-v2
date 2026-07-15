import { ThemedText } from "@/components/themed-text";
import { Colors, Fonts } from "@/constants/theme";
import { Dot, LogOut, Pill } from "lucide-react-native";
import { TouchableHighlight, useColorScheme, View } from "react-native";

export default function TopBar() {
	const colorScheme = useColorScheme() ?? "light";

	return (
		<View
			style={{
				flexDirection: "row",
				padding: 16,
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 12,
				}}
			>
				<Pill
					size={32}
					color={Colors[colorScheme].tint}
					style={{
						backgroundColor: Colors[colorScheme].iconBackground,
						padding: 8,
						borderRadius: 8,
						aspectRatio: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				/>
				<View
					style={{
						gap: 0,
						justifyContent: "center",
					}}
				>
					<ThemedText
						style={{
							fontFamily: Fonts.bold,
							fontSize: 18,
							fontWeight: "600",
						}}
					>
						MedCounter
					</ThemedText>
					<ThemedText
						style={{
							fontSize: 12,
							lineHeight: 12,
							fontWeight: "500",
							color: Colors[colorScheme].icon,
						}}
					>
						Smart refill tracker
					</ThemedText>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					gap: 16,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						paddingBlock: 4,
						paddingInlineStart: 4,
						paddingInlineEnd: 16,
						backgroundColor: Colors[colorScheme].iconBackground,
						borderRadius: 999,
					}}
				>
					<Dot color={Colors[colorScheme].icon} />
					<ThemedText
						style={{
							fontSize: 12,
							color: Colors[colorScheme].tint,
						}}
					>
						Synced
					</ThemedText>
				</View>
				<TouchableHighlight
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={() => null}
				>
					<LogOut
						size={18}
						color={Colors[colorScheme].icon}
					/>
				</TouchableHighlight>
			</View>
		</View>
	);
}
