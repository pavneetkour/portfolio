import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import {
  Card,
  CheckItem,
  ProfileAvatar,
  ScreenHeader,
  ScreenScroll,
  SectionTitle,
} from "@/components/ui";
import { EDUCATION, PROFILE, WHAT_I_BRING } from "@/constants/portfolio";
import { Spacing } from "@/constants/theme";

export default function AboutScreen() {
  return (
    <ScreenScroll>
      <ScreenHeader title="About Me" />

      <View style={styles.profile}>
        <ProfileAvatar />
        <ThemedText type="title" style={styles.name}>
          {PROFILE.name}
        </ThemedText>
        <ThemedText type="caption" themeColor="accent">
          {PROFILE.headline}
        </ThemedText>
      </View>

      <Card>
        <ThemedText type="caption" themeColor="textSecondary" style={styles.summary}>
          {PROFILE.summary}
        </ThemedText>
      </Card>

      <SectionTitle title="What I Bring" />
      <Card style={styles.checklist}>
        {WHAT_I_BRING.map((item) => (
          <CheckItem key={item} text={item} />
        ))}
      </Card>

      <SectionTitle title="Education" />
      <Card>
        <ThemedText type="smallBold">{EDUCATION.school}</ThemedText>
        <ThemedText type="caption" themeColor="accent">
          {EDUCATION.degree}
        </ThemedText>
        <ThemedText type="caption" themeColor="textSecondary">
          {EDUCATION.period}
        </ThemedText>
      </Card>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  profile: {
    alignItems: "center",
    gap: Spacing.two,
    marginBottom: Spacing.two,
  },
  name: { fontSize: 26 },
  summary: { lineHeight: 22 },
  checklist: { gap: Spacing.three },
});
