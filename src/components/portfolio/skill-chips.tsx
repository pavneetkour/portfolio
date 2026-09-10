import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

type Props = {
  skills: string[];
};

export function SkillChips({ skills }: Props) {
  return (
    <View style={styles.container}>
      {skills.map((skill) => (
        <ThemedView key={skill} type="backgroundElement" style={styles.chip}>
          <ThemedText type="caption">{skill}</ThemedText>
        </ThemedView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  chip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.four,
  },
});
