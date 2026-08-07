import { ThemedButton } from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { Field } from "@/components/ui/field";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { Pill, X } from "lucide-react-native";
import { Pressable, ScrollView, View } from "react-native";

export default function AddMedicinePage() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			medicine_name: "",
			strength: "",
			initial_quantity: "",
			dose_intake: "1",
			frequency: "once_daily",
			reminder_time: "8PM",
			refill_alert: "7",
			color: "blue",
			notes: "",
		},
	});

	function onSubmit(data: any) {
		console.log("data: ", data);
		router.navigate("/");
	}

	return (
		<ScrollView className="flex-1">
			<View className="p-4">
				<View className="flex flex-row gap-2 items-center">
					<Pill
						className="text-foreground"
						size={20}
					/>
					<ThemedText className="text-lg font-sans-semibold basis-full">
						Add Medicine
					</ThemedText>
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
				<View className="h-6"></View>
				<View className="flex gap-3">
					<Field
						control={control}
						name="medicine_name"
						label="Medicine Name"
						required
					/>
					<Field
						control={control}
						name="strength"
						label="Strength"
					/>
					<Field
						control={control}
						name="initial_quantity"
						label="Initial Quantity"
						required
					/>
					<Field
						control={control}
						name="dose_intake"
						label="Dose/Intake"
						required
					/>
					<Field
						control={control}
						name="frequency"
						label="Frequency"
						required
						type="select"
						pickerItems={[
							{ label: "Once daily", value: "once_daily" },
							{ label: "Twice daily", value: "twice_daily" },
							{ label: "3x daily", value: "three_times_daily" },
							{ label: "Weekly", value: "weekly" },
							{
								label: "Alternate days",
								value: "alternate_days",
							},
							{ label: "Custom", value: "custom" },
						]}
					/>
					<Field
						control={control}
						name="reminder_time"
						label="Reminder Time"
						required
					/>
					<Field
						control={control}
						name="refill_alert"
						label="Refill Alert (days)"
						required
					/>
					<Field
						control={control}
						name="color"
						label="Color"
					/>
					<Field
						control={control}
						name="notes"
						label="Notes"
					/>
				</View>
				<View className="h-6"></View>
				<ThemedButton
					size="sm"
					onPress={handleSubmit(onSubmit)}
				>
					Save
				</ThemedButton>
			</View>
		</ScrollView>
	);
}
