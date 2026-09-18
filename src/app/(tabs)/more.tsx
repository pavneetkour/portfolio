import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import {
  Card,
  CheckItem,
  ScreenHeader,
  ScreenScroll,
  SectionTitle,
  SocialLinks
} from "@/components/ui";
import { ACHIEVEMENTS, ENGINEERING_HIGHLIGHTS, EXPERIENCE, PROFILE } from "@/constants/portfolio";
import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

function ContactRow({
  icon,
  label,
  value,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  onPress: () => void;
}) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.contactRow, pressed && { opacity: 0.8 }]}>
      <View style={[styles.contactIcon, { backgroundColor: theme.accent + "18" }]}>
        <Ionicons name={icon} size={18} color={theme.accent} />
      </View>
      <View style={styles.contactText}>
        <ThemedText type="caption" themeColor="textSecondary">
          {label}
        </ThemedText>
        <ThemedText type="small">{value}</ThemedText>
      </View>
      <Ionicons name="chevron-forward" size={16} color={theme.textSecondary} />
    </Pressable>
  );
}

export default function MoreScreen() {
  const theme = useTheme();

  return (
    <ScreenScroll>
      <ScreenHeader title="More" />

      <SectionTitle title="Experience" subtitle="Where I've worked" />
      <View style={styles.timeline}>
        {EXPERIENCE.map((job, index) => (
          <View key={`${job.company}-${job.period}`} style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <View style={[styles.timelineDot, { backgroundColor: theme.accent }]} />
              {index < EXPERIENCE.length - 1 ? (
                <View style={[styles.timelineLine, { backgroundColor: theme.border }]} />
              ) : null}
            </View>
            <Card style={styles.timelineCard}>
              <ThemedText type="smallBold">{job.company}</ThemedText>
              <ThemedText type="caption" themeColor="accent">
                {job.role}
              </ThemedText>
              <ThemedText type="caption" themeColor="textSecondary">
                {job.period}
              </ThemedText>
              {job.highlights.map((h) => (
                <ThemedText
                  key={h}
                  type="caption"
                  themeColor="textSecondary"
                  style={styles.highlight}>
                  • {h}
                </ThemedText>
              ))}
            </Card>
          </View>
        ))}
      </View>

      <SectionTitle title="Engineering Highlights" />
      <Card style={styles.checklist}>
        {ENGINEERING_HIGHLIGHTS.map((item) => (
          <CheckItem key={item} text={item} />
        ))}
      </Card>

      <SectionTitle title="Achievements" />
      <Card style={styles.checklist}>
        {ACHIEVEMENTS.map((item) => (
          <CheckItem key={item} text={item} />
        ))}
      </Card>

      <SectionTitle title="Get In Touch" />
      <Card style={styles.contactCard}>
        <ContactRow
          icon="mail-outline"
          label="Email"
          value={PROFILE.email}
          onPress={() => Linking.openURL(`mailto:${PROFILE.email}`)}
        />
        <ContactRow
          icon="call-outline"
          label="Phone"
          value={PROFILE.phone}
          onPress={() => Linking.openURL(`tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`)}
        />
        <ContactRow
          icon="logo-linkedin"
          label="LinkedIn"
          value="Connect on LinkedIn"
          onPress={() => Linking.openURL(PROFILE.linkedin)}
        />
        <ContactRow
          icon="logo-github"
          label="GitHub"
          value="View my code"
          onPress={() => Linking.openURL(PROFILE.github)}
        />
      </Card>

      <SectionTitle title="Let's Connect" />
      <SocialLinks centered />
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  timeline: {
    gap: Spacing.two,
  },
  timelineItem: {
    flexDirection: "row",
    gap: Spacing.three,
  },
  timelineLeft: {
    alignItems: "center",
    width: 16,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 18,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    marginTop: 4,
  },
  timelineCard: {
    flex: 1,
    marginBottom: Spacing.two,
  },
  highlight: {
    lineHeight: 18,
    marginTop: 2,
  },
  checklist: {
    gap: Spacing.three,
  },
  resumeCard: {
    gap: Spacing.three,
  },
  resumeRow: {
    flexDirection: "row",
    gap: Spacing.three,
    alignItems: "center",
  },
  pdfIcon: {
    width: 52,
    height: 52,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  contactCard: {
    gap: Spacing.one,
    paddingVertical: Spacing.two,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
    paddingVertical: Spacing.two,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: Radius.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  contactText: {
    flex: 1,
    gap: 2,
  },
});
