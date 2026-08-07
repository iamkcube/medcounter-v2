import { ThemedText } from "@/components/themed-text";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react-native";
import { ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  View,
} from "react-native";

type ButtonVariant = "primary" | "secondary" | "success" | "danger";

type ButtonSize = "sm" | "md" | "lg";

type ButtonAlignment = "start" | "center" | "end" | "between";

interface ThemedButtonProps extends Omit<PressableProps, "children"> {
  children: ReactNode;

  variant?: ButtonVariant;
  size?: ButtonSize;
  align?: ButtonAlignment;

  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;

  loading?: boolean;
}

const variants: Record<
  ButtonVariant,
  {
    container: string;
    text: string;
    disabledContainer: string;
    disabledText: string;
  }
> = {
  primary: {
    container: "bg-foreground border border-foreground",
    text: "text-background",
    disabledContainer: "bg-muted border-muted opacity-50",
    disabledText: "text-muted-foreground",
  },

  secondary: {
    container: "bg-card border border-border",
    text: "text-foreground",
    disabledContainer: "bg-card border-border opacity-50",
    disabledText: "text-muted-foreground",
  },

  success: {
    container: "bg-emerald-500/15 border border-emerald-500/30",
    text: "text-emerald-400",
    disabledContainer: "bg-emerald-500/5 border-emerald-500/10 opacity-50",
    disabledText: "text-muted-foreground",
  },

  danger: {
    container: "bg-transparent border border-transparent",
    text: "text-destructive",
    disabledContainer: "opacity-50",
    disabledText: "text-muted-foreground",
  },
} as const;

const sizes: Record<
  ButtonSize,
  {
    container: string;
    text: string;
    icon: number;
  }
> = {
  sm: {
    container: "h-10 rounded-lg px-3",
    text: "text-sm",
    icon: 12,
  },

  md: {
    container: "h-12 rounded-xl px-4",
    text: "text-base",
    icon: 16,
  },

  lg: {
    container: "h-14 rounded-xl px-5",
    text: "text-lg",
    icon: 20,
  },
};

const alignments: Record<ButtonAlignment, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export function ThemedButton({
  children,
  variant = "primary",
  size = "md",
  align = "center",

  leftIcon: LeftIcon,
  rightIcon: RightIcon,

  loading = false,
  disabled,

  className,
  style,

  ...props
}: ThemedButtonProps) {
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  const isDisabled = disabled || loading;

  return (
    <Pressable
      disabled={isDisabled}
      className={cn(
        "flex-row items-center",
        sizeStyles.container,
        alignments[align],
        isDisabled ? variantStyles.disabledContainer : variantStyles.container,
        className,
      )}
      style={(state) => [
        typeof style === "function" ? style(state) : style,
        {
          opacity: state.pressed && !isDisabled ? 0.8 : 1,
        },
      ]}
      {...props}
    >
      {align === "between" ? (
        <>
          <View className="flex-row items-center gap-2">
            {loading ? (
              <ActivityIndicator
                size="small"
                color={variant === "primary" ? "white" : undefined}
              />
            ) : (
              LeftIcon && (
                <LeftIcon
                  size={sizeStyles.icon}
                  className={
                    isDisabled ? variantStyles.disabledText : variantStyles.text
                  }
                />
              )
            )}

            <ThemedText
              className={cn(
                "font-sans-semibold",
                sizeStyles.text,
                isDisabled ? variantStyles.disabledText : variantStyles.text,
              )}
            >
              {children}
            </ThemedText>
          </View>

          {!loading && RightIcon && (
            <RightIcon
              size={sizeStyles.icon}
              className={
                isDisabled ? variantStyles.disabledText : variantStyles.text
              }
            />
          )}
        </>
      ) : (
        <View className="flex-row items-center gap-2">
          {loading ? (
            <ActivityIndicator
              size="small"
              color={variant === "primary" ? "white" : undefined}
            />
          ) : (
            LeftIcon && (
              <LeftIcon
                size={sizeStyles.icon}
                className={
                  isDisabled ? variantStyles.disabledText : variantStyles.text
                }
              />
            )
          )}

          <ThemedText
            className={cn(
              "font-sans-semibold",
              sizeStyles.text,
              isDisabled ? variantStyles.disabledText : variantStyles.text,
            )}
          >
            {children}
          </ThemedText>

          {!loading && RightIcon && (
            <RightIcon
              size={sizeStyles.icon}
              className={
                isDisabled ? variantStyles.disabledText : variantStyles.text
              }
            />
          )}
        </View>
      )}
    </Pressable>
  );
}
