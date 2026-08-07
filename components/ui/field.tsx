import { ThemedText } from "@/components/themed-text";
import { ThemedTextInput } from "@/components/themed-textinput";
import { palette } from "@/constants/palette";
import { useTheme } from "@/lib/theme/ThemeProvider";
import {
	Control,
	Controller,
	ControllerFieldState,
	ControllerRenderProps,
	FieldPath,
	FieldValues,
	UseFormStateReturn,
} from "react-hook-form";
import { TextInputProps, TextProps, View } from "react-native";
import RNPickerSelect, { Item } from "react-native-picker-select";

interface FieldProps<TFieldValues extends FieldValues = FieldValues> {
	type?: "text" | "select";
	control: Control<TFieldValues>;
	required?: boolean;
	name: FieldPath<TFieldValues>;
	placeholder?: string;
	label: string;
	labelProps?: TextProps;
	inputProps?: TextInputProps;
	pickerItems?: Item[];
}

export function Field<TFieldValues extends FieldValues = FieldValues>({
	type = "text",
	control,
	required,
	name,
	placeholder,
	label,
	labelProps,
	inputProps,
	pickerItems,
}: FieldProps<TFieldValues>) {
	const { resolvedTheme } = useTheme();
	const colors = palette[resolvedTheme];

	const styles = {
		selectStyles: {
			inputIOS: {
				borderWidth: 1,
				borderColor: colors.muted,
				backgroundColor: colors.muted50,
				paddingHorizontal: 12,
				paddingVertical: 8,
				borderRadius: 4,
				color: colors.foreground,
				fontSize: 14,
			},
			inputAndroid: {
				borderWidth: 1,
				borderColor: colors.muted,
				backgroundColor: colors.muted50,
				paddingHorizontal: 12,
				paddingVertical: 8,
				borderRadius: 4,
				color: colors.foreground,
				fontSize: 14,
			},
			inputWeb: {
				borderWidth: 1,
				borderColor: colors.muted,
				backgroundColor: colors.muted50,
				paddingHorizontal: 12,
				paddingVertical: 8,
				borderRadius: 4,
				color: colors.foreground,
				fontSize: 14,
			},
			placeholder: {
				color: colors.muted,
			},
		},
	};

	return (
		<View className="flex gap-2">
			<ThemedText
				{...labelProps}
				className="text-muted-foreground font-sans-medium"
			>
				{label}
				{!required && " (Optional)"}
			</ThemedText>
			{type === "text" && (
				<Controller
					control={control}
					name={name}
					rules={{ required: required }}
					render={({ field: { onChange, value } }) => (
						<ThemedTextInput
							value={value}
							onChange={onChange}
							placeholder={`Enter ${(placeholder ?? label).toLowerCase()}`}
							className="border border-muted bg-muted/50 px-3 py-2 rounded-sm"
							{...inputProps}
						/>
					)}
				/>
			)}
			{type === "select" && pickerItems && (
				<Controller
					control={control}
					name={name}
					rules={{ required: required }}
					render={({ field: { onChange, value } }) => (
						<RNPickerSelect
							style={styles.selectStyles}
							value={value}
							onValueChange={onChange}
							items={pickerItems}
							placeholder={{
								label: placeholder ?? `Select ${label}`,
							}}
						/>
					)}
				/>
			)}
		</View>
	);
}
