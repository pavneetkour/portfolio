import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export function GradientButton({
  label,
  onPress,
  icon,
}: {
  label: string;
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <View style={styles.gradientBtn}>
        <ThemedText type="smallBold" style={styles.gradientBtnText}>
          {label}
        </ThemedText>
        {icon ? <Ionicons name={icon} size={18} color="#FFFFFF" /> : null}
      </View>
    </Pressable>
  );
}

export function OutlineButton({
  label,
  onPress,
}: {
  label: string;
  onPress?: () => void;
}) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <View style={[styles.outlineBtn, { borderColor: theme.border }]}>
        <ThemedText type="smallBold">{label}</ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gradientBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.two,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.lg,
    experimental_backgroundImage: "linear-gradient(135deg, #7B61FF, #5B8DEF)",
  },
  gradientBtnText: { color: "#FFFFFF" },
  outlineBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.lg,
    borderWidth: 1,
  },
  pressed: { opacity: 0.82 },
});
