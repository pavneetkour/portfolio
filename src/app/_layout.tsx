import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <AnimatedSplashOverlay />
      <AppTabs />
    </>
  );
}
