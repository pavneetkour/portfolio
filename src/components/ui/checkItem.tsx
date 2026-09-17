import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export function CheckItem({ text }: { text: string }) {
  const theme = useTheme();
  return (
    <View style={styles.checkRow}>
      <Ionicons name="checkmark-circle" size={18} color={theme.accent} />
      <ThemedText type="caption" style={styles.checkText}>
        {text}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  checkRow: {
    flexDirection: "row",
    gap: Spacing.two,
    alignItems: "flex-start",
  },
  checkText: { flex: 1, lineHeight: 20 },
});
