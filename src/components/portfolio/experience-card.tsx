import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Experience } from "@/constants/portfolio";
import { Spacing } from "@/constants/theme";

type Props = {
  item: Experience;
};

export function ExperienceCard({ item }: Props) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="smallBold">{item.company}</ThemedText>
      <ThemedText type="caption" themeColor="accent">
        {item.role}
      </ThemedText>
      <ThemedText type="caption" themeColor="textSecondary">
        {item.period}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    gap: Spacing.one,
  },
});
