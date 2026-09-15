import { ThemedText } from '@/components/themed-text';
import { Card, ScreenHeader, ScreenScroll, SectionTitle } from '@/components/ui';
import { TECH_CATEGORIES } from '@/constants/portfolio';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function TechScreen() {
  const theme = useTheme();

  return (
    <ScreenScroll>
      <ScreenHeader title="Tech Stack" />
      <SectionTitle
        title="Technologies I Work With"
        subtitle="Tools and frameworks across the mobile stack"
      />

      <View style={styles.grid}>
        {TECH_CATEGORIES.map((category) => (
          <Card key={category.title} style={styles.categoryCard}>
            <View style={styles.categoryHeader}>
              <View style={[styles.iconWrap, { backgroundColor: theme.accent + '18' }]}>
                <Ionicons
                  name={category.icon as keyof typeof Ionicons.glyphMap}
                  size={18}
                  color={theme.accent}
                />
              </View>
              <ThemedText type="smallBold">{category.title}</ThemedText>
            </View>
            <View style={styles.items}>
              {category.items.map((item) => (
                <View key={item} style={styles.itemRow}>
                  <View style={[styles.dot, { backgroundColor: theme.accent }]} />
                  <ThemedText type="caption">{item}</ThemedText>
                </View>
              ))}
            </View>
          </Card>
        ))}
      </View>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  grid: { gap: Spacing.three },
  categoryCard: { gap: Spacing.three },
  categoryHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: { gap: Spacing.two },
  itemRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  dot: { width: 6, height: 6, borderRadius: 3 },
});
