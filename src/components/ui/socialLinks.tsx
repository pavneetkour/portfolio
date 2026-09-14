import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import {
  Pressable,
  StyleSheet,
  View
} from 'react-native';

import { PROFILE } from '@/constants/portfolio';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';


export function SocialLinks({ centered }: { centered?: boolean; }) {
  const theme = useTheme();
  const links = [
    { icon: 'logo-github' as const, url: PROFILE.github },
    { icon: 'logo-linkedin' as const, url: PROFILE.linkedin },
    { icon: 'mail-outline' as const, url: `mailto:${PROFILE.email}` },
  ];

  return (
    <View style={[styles.socialRow, centered && styles.socialCentered]}>
      {links.map((link) => (
        <Pressable
          key={link.icon}
          onPress={() => Linking.openURL(link.url)}
          style={[styles.socialBtn, { backgroundColor: theme.backgroundElement }]}>
          <Ionicons name={link.icon} size={20} color={theme.text} />
        </Pressable>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  socialRow: { flexDirection: 'row', gap: Spacing.two },
  socialCentered: { justifyContent: 'center' },
  socialBtn: {
    width: 44,
    height: 44,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
