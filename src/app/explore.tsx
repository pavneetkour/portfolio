import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExperienceCard } from '@/components/portfolio/experience-card';
import { ProjectCard } from '@/components/portfolio/project-card';
import { SectionHeader } from '@/components/portfolio/section-header';
import { ThemedView } from '@/components/themed-view';
import { EXPERIENCE, PROJECTS } from '@/constants/portfolio';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function WorkScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + Spacing.three,
            paddingBottom: insets.bottom + BottomTabInset + Spacing.five,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.section}>
            <SectionHeader
              title="Experience"
              subtitle="Companies I've worked with"
            />
            <View style={styles.cards}>
              {EXPERIENCE.map((item) => (
                <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <SectionHeader
              title="Projects"
              subtitle="Apps I've built and shipped"
            />
            <View style={styles.cards}>
              {PROJECTS.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.six,
  },
  section: {
    gap: Spacing.two,
  },
  cards: {
    gap: Spacing.three,
  },
});
