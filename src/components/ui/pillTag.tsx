import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export function PillTag({ label, active }: { label: string; active?: boolean }) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.pill,
        {
          backgroundColor: active ? theme.accent + "22" : theme.backgroundElement,
          borderColor: active ? theme.accent : theme.border,
        },
      ]}>
      <ThemedText type="caption" themeColor={active ? "accent" : "textSecondary"}>
        {label}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: Spacing.two + 2,
    paddingVertical: 6,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
});
