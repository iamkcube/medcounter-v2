import { ThemedText } from "@/components/themed-text";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { PressableProps, Pressable } from "react-native";

interface ThemedButtonProps extends Omit<PressableProps, "children"> {
  children: ReactNode;
}

export function ThemedButton({
  className,
  children,
  ...props
}: ThemedButtonProps) {
  return (
    <Pressable className={cn(buttonClasses, className)} {...props}>
      <ThemedText className="text-background font-sans-semibold">{children}</ThemedText>
    </Pressable>
  );
}

const buttonClasses = "bg-foreground px-4 py-2 rounded-sm";
