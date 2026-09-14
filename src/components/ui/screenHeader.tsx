import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Pressable,
  StyleSheet,
  View
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

export function ScreenHeader({ title, showBack }: { title: string; showBack?: boolean; }) {
  return (
    <View style={styles.header}>
      {showBack ? (
        <Pressable onPress={() => router.back()} style={styles.backBtn} hitSlop={12}>
          <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
        </Pressable>
      ) : (
        <View style={styles.backBtn} />
      )}
      <ThemedText type="smallBold" style={styles.headerTitle}>
        {title}
      </ThemedText>
      <View style={styles.backBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.two,
  },
  backBtn: { width: 32, height: 32, justifyContent: 'center' },
  headerTitle: { flex: 1, textAlign: 'center' },
});
