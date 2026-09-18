import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import {
  Card,
  CheckItem,
  PillTag,
  ScreenHeader,
  ScreenScroll,
  SectionTitle,
} from "@/components/ui";
import { getProject } from "@/constants/portfolio";
import { Radius, Spacing } from "@/constants/theme";

export default function ProjectDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const project = getProject(id ?? "");

  if (!project) {
    return (
      <ScreenScroll>
        <ScreenHeader title="Project" showBack />
        <ThemedText type="caption" themeColor="textSecondary">
          Project not found.
        </ThemedText>
      </ScreenScroll>
    );
  }

  return (
    <ScreenScroll>
      <ScreenHeader title={project.name} showBack />

      <View style={[styles.heroBanner, { backgroundColor: project.color + "22" }]}>
        <ThemedText style={styles.heroEmoji}>{project.emoji}</ThemedText>
        <ThemedText type="subtitle">{project.subtitle}</ThemedText>
        {project.role ? (
          <ThemedText type="caption" themeColor="textSecondary">
            {project.role}
          </ThemedText>
        ) : null}
      </View>

      <View style={styles.tags}>
        {project.tags.map((tag) => (
          <PillTag key={tag} label={tag} active />
        ))}
      </View>

      <Card>
        <ThemedText type="smallBold">Overview</ThemedText>
        <ThemedText type="caption" themeColor="textSecondary" style={styles.body}>
          {project.description}
        </ThemedText>
      </Card>

      <SectionTitle title="My Role" />
      <Card>
        <ThemedText type="caption" themeColor="textSecondary" style={styles.body}>
          {project.role ?? "React Native Developer — end-to-end mobile feature development"}
        </ThemedText>
      </Card>

      <SectionTitle title="Key Features" />
      <Card style={styles.checklist}>
        {project.highlights.map((item) => (
          <CheckItem key={item} text={item} />
        ))}
      </Card>

      <SectionTitle title="Tech Stack" />
      <View style={styles.tags}>
        {project.stack.map((tech) => (
          <PillTag key={tech} label={tech} />
        ))}
      </View>

      {project.caseStudy ? (
        <>
          <SectionTitle title="Case Study" subtitle={project.caseStudy.title} />
          <Card style={styles.caseStudy}>
            <View style={styles.caseBlock}>
              <View style={styles.caseLabel}>
                <Ionicons name="alert-circle-outline" size={16} color="#F87171" />
                <ThemedText type="smallBold">Problem</ThemedText>
              </View>
              <ThemedText type="caption" themeColor="textSecondary" style={styles.body}>
                {project.caseStudy.problem}
              </ThemedText>
            </View>
            <View style={styles.caseBlock}>
              <View style={styles.caseLabel}>
                <Ionicons name="bulb-outline" size={16} color="#7B61FF" />
                <ThemedText type="smallBold">Solution</ThemedText>
              </View>
              <ThemedText type="caption" themeColor="textSecondary" style={styles.body}>
                {project.caseStudy.solution}
              </ThemedText>
            </View>
            <View style={styles.tags}>
              {project.caseStudy.tech.map((t) => (
                <PillTag key={t} label={t} active />
              ))}
            </View>
          </Card>
        </>
      ) : null}
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  heroBanner: {
    alignItems: "center",
    padding: Spacing.five,
    borderRadius: Radius.lg,
    gap: Spacing.two,
  },
  heroEmoji: {
    fontSize: 48,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.two,
  },
  body: {
    lineHeight: 22,
  },
  checklist: {
    gap: Spacing.three,
  },
  caseStudy: {
    gap: Spacing.four,
  },
  caseBlock: {
    gap: Spacing.two,
  },
  caseLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
  },
});
