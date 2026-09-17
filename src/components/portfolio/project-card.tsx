import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Project } from "@/constants/portfolio";
import { Spacing } from "@/constants/theme";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="smallBold">{project.name}</ThemedText>
      {project.role ? (
        <ThemedText type="caption" themeColor="accent">
          {project.role}
        </ThemedText>
      ) : null}
      <ThemedText type="caption" themeColor="textSecondary">
        {project.stack}
      </ThemedText>
      <View style={styles.highlights}>
        {project.highlights.map((highlight) => (
          <View key={highlight} style={styles.row}>
            <ThemedText type="caption" themeColor="accent">
              •
            </ThemedText>
            <ThemedText type="caption" style={styles.highlightText}>
              {highlight}
            </ThemedText>
          </View>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    gap: Spacing.two,
  },
  highlights: {
    gap: Spacing.two,
    marginTop: Spacing.one,
  },
  row: {
    flexDirection: "row",
    gap: Spacing.two,
    alignItems: "flex-start",
  },
  highlightText: {
    flex: 1,
    lineHeight: 20,
  },
});
