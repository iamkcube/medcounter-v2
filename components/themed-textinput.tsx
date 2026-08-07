import { cn } from "@/lib/utils";
import { TextInput as RNTextInput, TextInputProps } from "react-native";

export function ThemedTextInput({
	style,
	className,
	...props
}: TextInputProps) {
	return (
		<RNTextInput
			className={cn("text-foreground font-sans", className)}
			{...props}
		/>
	);
}
