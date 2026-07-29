// components/ThemedText.tsx
import { cn } from "@/lib/utils";
import { Text as RNText, TextProps } from "react-native";

export function ThemedText({ style, className, ...props }: TextProps) {
	return (
		<RNText
			className={cn("text-foreground font-sans", className)}
			{...props}
		/>
	);
}
