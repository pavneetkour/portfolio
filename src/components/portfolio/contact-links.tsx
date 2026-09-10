import * as Linking from 'expo-linking';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PROFILE } from '@/constants/portfolio';
import { Spacing } from '@/constants/theme';

type ContactItem = {
  label: string;
  value: string;
  url: string;
};

const CONTACTS: ContactItem[] = [
  {
    label: 'Phone',
    value: PROFILE.phone,
    url: `tel:${PROFILE.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    label: 'Email',
    value: PROFILE.email,
    url: `mailto:${PROFILE.email}`,
  },
];

export function ContactLinks() {
  return (
    <View style={styles.container}>
      {CONTACTS.map((contact) => (
        <Pressable
          key={contact.label}
          onPress={() => Linking.openURL(contact.url)}
          style={({ pressed }) => [pressed && styles.pressed]}>
          <ThemedView type="backgroundElement" style={styles.card}>
            <ThemedText type="caption" themeColor="textSecondary">
              {contact.label}
            </ThemedText>
            <ThemedText type="small" themeColor="accent">
              {contact.value}
            </ThemedText>
          </ThemedView>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
  },
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    gap: Spacing.one,
  },
  pressed: {
    opacity: 0.75,
  },
});
