import KPICard from "@/components/ui/kpi-card";
import { Box, LogOut } from "lucide-react-native";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
	return (
		<ScrollView
			style={{
				padding: 16,
			}}
		>
			<FlatList
				data={kpiCards}
				numColumns={4}
				renderItem={({ item }) => <KPICard {...item} />}
			/>
			<FlatList
				data={kpiCards}
				renderItem={({ item }) => <KPICard {...item} />}
			/>
		</ScrollView>
	);
}

const kpiCards = [
	{
		icon: Box,
		amount: 7,
		title: "Total",
	},
	{
		icon: Box,
		amount: 7,
		title: "Critical",
	},
	{
		icon: Box,
		amount: 7,
		title: "Refill",
	},
	{
		icon: Box,
		amount: 7,
		title: "Safe",
	},
];

const medicines = [
	{
		id: "bisoprolol",
		name: "Bisoprolol",
		strength: "5mg",
		remainingTablets: 20,
		totalTablets: 257,
		daysLeft: 20,
		percentageRemaining: 8,
		dosage: "8:00 AM Once daily",
		finishDate: "Aug 2",
	},
	{
		id: "dapaglafozin",
		name: "Dapagliflozin + Metformin + Sitagliptin",
		strength: "D10mg / S100mg / M500mg",
		remainingTablets: 33,
		totalTablets: 103,
		daysLeft: 33,
		percentageRemaining: 32,
		dosage: "8:00 AM Once daily",
		finishDate: "Aug 15",
	},
];

const styles = StyleSheet.create({
	titleContainer: {},
	stepContainer: {},
});
