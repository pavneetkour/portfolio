import { ThemedText } from "@/components/themed-text";
import { GradientButton, OutlineButton, PillTag, ScreenScroll, SocialLinks } from "@/components/ui";
import { PROFILE, QUICK_SKILLS } from "@/constants/portfolio";
import { Spacing } from "@/constants/theme";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScreenScroll>
      <View style={styles.hero}>
        <ThemedText type="title" style={styles.headline}>
          {PROFILE.headline}
        </ThemedText>
        <ThemedText type="caption" themeColor="textSecondary" style={styles.tagline}>
          {PROFILE.tagline}
        </ThemedText>
      </View>

      <View style={styles.pills}>
        {QUICK_SKILLS.map((skill) => (
          <PillTag key={skill} label={skill} active />
        ))}
      </View>

      <View style={styles.actions}>
        <GradientButton
          label="View Projects"
          icon="arrow-forward"
          onPress={() => router.push("/projects")}
        />
        <OutlineButton
          label="Contact Me"
          onPress={() => Linking.openURL(`mailto:${PROFILE.email}`)}
        />
      </View>
      <SocialLinks centered />
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: Spacing.two, marginTop: Spacing.two
  },
  headline: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "700"
  },
  tagline: {
    lineHeight: 22,
    maxWidth: 340
  },
  pills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.two
  },
  actions: {
    gap: Spacing.three,
    marginTop: Spacing.two
  },
});
