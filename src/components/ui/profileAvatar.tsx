import {
  StyleSheet,
  View
} from 'react-native';

import { ThemedText } from '@/components/themed-text';


export function ProfileAvatar({ size = 88 }: { size?: number; }) {
  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}>
      <ThemedText type="title" style={styles.avatarText}>
        PK
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({

  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    experimental_backgroundImage: 'linear-gradient(135deg, #7B61FF, #5B8DEF)',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 28
  },
});
