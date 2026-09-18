import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Card } from "./card";
import { PillTag } from "./pillTag";

export function ProjectLinkCard({
  id,
  name,
  subtitle,
  description,
  stack,
  color,
  emoji,
}: {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  color: string;
  emoji: string;
}) {
  const theme = useTheme();

  return (
    <Link href={`/project/${id}`} asChild>
      <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
        <Card style={styles.projectCard}>
          <View style={styles.projectTop}>
            <View style={[styles.projectIcon, { backgroundColor: color + "22" }]}>
              <ThemedText style={styles.projectEmoji}>{emoji}</ThemedText>
            </View>
            <View style={styles.projectInfo}>
              <ThemedText type="smallBold">
                {name} — {subtitle}
              </ThemedText>
              <ThemedText type="caption" themeColor="textSecondary" numberOfLines={2}>
                {description}
              </ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={18} color={theme.textSecondary} />
          </View>
          <View style={styles.projectTags}>
            {stack.slice(0, 3).map((tag) => (
              <PillTag key={tag} label={tag} />
            ))}
          </View>
        </Card>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.82 },
  projectCard: { gap: Spacing.three },
  projectTop: {
    flexDirection: "row",
    gap: Spacing.three,
    alignItems: "center",
  },
  projectIcon: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  projectEmoji: { fontSize: 22 },
  projectInfo: { flex: 1, gap: 4 },
  projectTags: { flexDirection: "row", flexWrap: "wrap", gap: Spacing.two },
});
