import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ContactLinks } from '@/components/portfolio/contact-links';
import { SectionHeader } from '@/components/portfolio/section-header';
import { SkillChips } from '@/components/portfolio/skill-chips';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {
  ACHIEVEMENTS,
  EDUCATION,
  PROFILE,
  SKILLS,
} from '@/constants/portfolio';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function AboutScreen() {
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
          <View style={styles.hero}>
            <ThemedText type="caption" themeColor="accent">
              Hi, I&apos;m
            </ThemedText>
            <ThemedText type="title">{PROFILE.name}</ThemedText>
            <ThemedText type="subtitle" themeColor="accent">
              {PROFILE.title}
            </ThemedText>
            <ThemedText type="caption" themeColor="textSecondary" style={styles.tagline}>
              React Native Developer · 6+ years building mobile apps
            </ThemedText>
          </View>

          <ContactLinks />

          <View style={styles.section}>
            <SectionHeader title="Summary" />
            <ThemedText type="caption" style={styles.bodyText}>
              {PROFILE.summary}
            </ThemedText>
          </View>

          <View style={styles.section}>
            <SectionHeader title="Skills" />
            <SkillChips skills={SKILLS} />
          </View>

          <View style={styles.section}>
            <SectionHeader title="Achievements" />
            <View style={styles.list}>
              {ACHIEVEMENTS.map((item) => (
                <View key={item} style={styles.listRow}>
                  <ThemedText type="caption" themeColor="accent">
                    •
                  </ThemedText>
                  <ThemedText type="caption" style={styles.listText}>
                    {item}
                  </ThemedText>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <SectionHeader title="Education" />
            <ThemedView type="backgroundElement" style={styles.educationCard}>
              <ThemedText type="smallBold">{EDUCATION.school}</ThemedText>
              <ThemedText type="caption" themeColor="accent">
                {EDUCATION.degree}
              </ThemedText>
              <ThemedText type="caption" themeColor="textSecondary">
                {EDUCATION.period}
              </ThemedText>
            </ThemedView>
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
    gap: Spacing.five,
  },
  hero: {
    gap: Spacing.two,
    paddingBottom: Spacing.two,
  },
  tagline: {
    marginTop: Spacing.one,
  },
  section: {
    gap: Spacing.two,
  },
  bodyText: {
    lineHeight: 22,
  },
  list: {
    gap: Spacing.two,
  },
  listRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  listText: {
    flex: 1,
    lineHeight: 20,
  },
  educationCard: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    gap: Spacing.one,
  },
});
