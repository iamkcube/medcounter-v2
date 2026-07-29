import KPICard from "@/components/ui/kpi-card";
import MedicineCard from "@/components/ui/medicine-card";
import { Box, LogOut } from "lucide-react-native";
import { FlatList, ScrollView, StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 gap-4 p-4 bg-background">
      <View className="grid grid-cols-4 gap-2">
        {kpiCards.map((item) => (
          <KPICard key={item.title} {...item} />
        ))}
      </View>
      <FlatList
        data={medicines}
        scrollEnabled
        renderItem={({ item }) => <MedicineCard {...item} />}
      />
    </View>
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
    timing: "8:00 AM",
    dosage: "Once daily",
    finishDate: "Aug 2",
  },
  {
    id: "dapagliflozin-metformin-sitagliptin",
    name: "Dapagliflozin + Metformin + Sitagliptin",
    strength: "D10mg / S100mg / M500mg",
    remainingTablets: 33,
    totalTablets: 103,
    daysLeft: 33,
    timing: "8:00 AM",
    dosage: "Once daily",
    finishDate: "Aug 15",
  },
  {
    id: "metformin",
    name: "Metformin",
    strength: "500mg",
    remainingTablets: 44,
    totalTablets: 60,
    daysLeft: 44,
    timing: "8:00 PM",
    dosage: "Once daily",
    finishDate: "Sep 9",
  },
  {
    id: "telmisartan",
    name: "Telmisartan",
    strength: "40mg",
    remainingTablets: 12,
    totalTablets: 30,
    daysLeft: 12,
    timing: "9:00 AM",
    dosage: "Once daily",
    finishDate: "Aug 24",
  },
  {
    id: "amlodipine",
    name: "Amlodipine",
    strength: "5mg",
    remainingTablets: 18,
    totalTablets: 30,
    daysLeft: 18,
    timing: "9:00 PM",
    dosage: "Once daily",
    finishDate: "Aug 30",
  },
  {
    id: "atorvastatin",
    name: "Atorvastatin",
    strength: "20mg",
    remainingTablets: 8,
    totalTablets: 30,
    daysLeft: 8,
    timing: "10:00 PM",
    dosage: "Once daily",
    finishDate: "Aug 20",
  },
  {
    id: "aspirin",
    name: "Aspirin",
    strength: "75mg",
    remainingTablets: 27,
    totalTablets: 60,
    daysLeft: 27,
    timing: "8:30 AM",
    dosage: "Once daily",
    finishDate: "Sep 8",
  },
  {
    id: "clopidogrel",
    name: "Clopidogrel",
    strength: "75mg",
    remainingTablets: 14,
    totalTablets: 30,
    daysLeft: 14,
    timing: "8:30 AM",
    dosage: "Once daily",
    finishDate: "Aug 26",
  },
  {
    id: "empagliflozin",
    name: "Empagliflozin",
    strength: "25mg",
    remainingTablets: 25,
    totalTablets: 90,
    daysLeft: 25,
    timing: "7:30 AM",
    dosage: "Once daily",
    finishDate: "Sep 6",
  },
  {
    id: "furosemide",
    name: "Furosemide",
    strength: "40mg",
    remainingTablets: 10,
    totalTablets: 30,
    daysLeft: 10,
    timing: "7:00 AM",
    dosage: "Once daily",
    finishDate: "Aug 22",
  },
  {
    id: "spironolactone",
    name: "Spironolactone",
    strength: "25mg",
    remainingTablets: 21,
    totalTablets: 30,
    daysLeft: 21,
    timing: "8:00 AM",
    dosage: "Once daily",
    finishDate: "Sep 2",
  },
  {
    id: "sacubitril-valsartan",
    name: "Sacubitril + Valsartan",
    strength: "49mg / 51mg",
    remainingTablets: 6,
    totalTablets: 60,
    daysLeft: 6,
    timing: "8:00 AM & 8:00 PM",
    dosage: "Twice daily",
    finishDate: "Aug 18",
  },
  {
    id: "pantoprazole",
    name: "Pantoprazole",
    strength: "40mg",
    remainingTablets: 16,
    totalTablets: 30,
    daysLeft: 16,
    timing: "7:30 AM",
    dosage: "Once daily (before breakfast)",
    finishDate: "Aug 28",
  },
  {
    id: "vitamin-d3",
    name: "Vitamin D3",
    strength: "60000 IU",
    remainingTablets: 5,
    totalTablets: 8,
    daysLeft: 35,
    timing: "Sunday 9:00 AM",
    dosage: "Once weekly",
    finishDate: "Sep 28",
  },
  {
    id: "levothyroxine",
    name: "Levothyroxine",
    strength: "50mcg",
    remainingTablets: 29,
    totalTablets: 60,
    daysLeft: 29,
    timing: "6:30 AM",
    dosage: "Once daily (empty stomach)",
    finishDate: "Sep 10",
  },
];

const styles = StyleSheet.create({
  titleContainer: {},
  stepContainer: {},
});
