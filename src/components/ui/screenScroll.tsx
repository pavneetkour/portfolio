import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export function ScreenScroll({
  children,
  noPadding,
}: {
  children: React.ReactNode;
  noPadding?: boolean;
}) {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={styles.screen}>
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          {
            paddingBottom: insets.bottom,
            paddingHorizontal: noPadding ? 0 : Spacing.three,
          },
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  screen: { flex: 1 },
  scroll: { alignItems: 'center' },
  content: { width: '100%', maxWidth: MaxContentWidth, gap: Spacing.four },
  // header: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   marginBottom: Spacing.two,
  // },
  // backBtn: { width: 32, height: 32, justifyContent: 'center' },
  // headerTitle: { flex: 1, textAlign: 'center' },
  // pill: {
  //   paddingHorizontal: Spacing.two + 2,
  //   paddingVertical: 6,
  //   borderRadius: Radius.full,
  //   borderWidth: 1,
  // },
  // gradientBtn: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   gap: Spacing.two,
  //   paddingVertical: Spacing.three,
  //   paddingHorizontal: Spacing.four,
  //   borderRadius: Radius.lg,
  //   experimental_backgroundImage: 'linear-gradient(135deg, #7B61FF, #5B8DEF)',
  // },
  // gradientBtnText: { color: '#FFFFFF' },
  // outlineBtn: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: Spacing.three,
  //   paddingHorizontal: Spacing.four,
  //   borderRadius: Radius.lg,
  //   borderWidth: 1,
  // },
  // pressed: { opacity: 0.82 },
  // checkRow: { flexDirection: 'row', gap: Spacing.two, alignItems: 'flex-start' },
  // checkText: { flex: 1, lineHeight: 20 },
  // avatar: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   experimental_backgroundImage: 'linear-gradient(135deg, #7B61FF, #5B8DEF)',
  // },
  // avatarText: { color: '#FFFFFF', fontSize: 28 },
  // socialRow: { flexDirection: 'row', gap: Spacing.two },
  // socialCentered: { justifyContent: 'center' },
  // socialBtn: {
  //   width: 44,
  //   height: 44,
  //   borderRadius: Radius.md,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // landscape: {
  //   height: 120,
  //   marginTop: Spacing.four,
  //   overflow: 'hidden',
  //   borderRadius: Radius.lg,
  //   position: 'relative',
  // },
  // mountain: { position: 'absolute', bottom: 0 },
  // mountainBack: { left: -20, width: '70%', height: 60, borderTopLeftRadius: 80, borderTopRightRadius: 80 },
  // mountainMid: { left: '25%', width: '60%', height: 80, borderTopLeftRadius: 60, borderTopRightRadius: 60 },
  // mountainFront: { right: -10, width: '55%', height: 100, borderTopLeftRadius: 50, borderTopRightRadius: 50 },
  // sectionTitle: { gap: Spacing.one, marginBottom: Spacing.two },
  // card: {
  //   borderRadius: Radius.lg,
  //   borderWidth: 1,
  //   padding: Spacing.three,
  //   gap: Spacing.two,
  // },
  // formCard: { gap: Spacing.three },
  // input: {
  //   borderWidth: 1,
  //   borderRadius: Radius.md,
  //   paddingHorizontal: Spacing.three,
  //   paddingVertical: Spacing.two + 2,
  //   fontSize: 14,
  // },
  // textArea: { minHeight: 100, textAlignVertical: 'top' },
  // projectCard: { gap: Spacing.three },
  // projectTop: { flexDirection: 'row', gap: Spacing.three, alignItems: 'center' },
  // projectIcon: {
  //   width: 48,
  //   height: 48,
  //   borderRadius: Radius.md,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // projectEmoji: { fontSize: 22 },
  // projectInfo: { flex: 1, gap: 4 },
  // projectTags: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
});
