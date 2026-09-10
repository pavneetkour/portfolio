import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

type Props = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">{title}</ThemedText>
      {subtitle ? (
        <ThemedText type="caption" themeColor="textSecondary">
          {subtitle}
        </ThemedText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.one,
    marginBottom: Spacing.three,
  },
});
