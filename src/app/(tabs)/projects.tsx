import { StyleSheet, View } from "react-native";

import {
  ProjectLinkCard,
  ScreenHeader,
  ScreenScroll,
  SectionTitle,
} from "@/components/ui";
import { PROJECTS } from "@/constants/portfolio";
import { Spacing } from "@/constants/theme";

export default function ProjectsScreen() {
  return (
    <ScreenScroll>
      <ScreenHeader title="My Projects" />
      <SectionTitle
        title="Shipped Apps"
        subtitle="Production mobile apps across dating, healthcare, transport & more"
      />
      <View style={styles.list}>
        {PROJECTS.map((project) => (
          <ProjectLinkCard
            key={project.id}
            id={project.id}
            name={project.name}
            subtitle={project.subtitle}
            description={project.description}
            stack={project.stack}
            color={project.color}
            emoji={project.emoji}
          />
        ))}
      </View>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  list: { gap: Spacing.three },
});
