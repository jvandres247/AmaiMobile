import React from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../theme/colors';

type Variant = 'start' | 'full';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: Variant;
};

export default function GradientBackground({
  children,
  style,
  variant = 'start',
}: Props) {
  const variantConfig = {
    start: {
      colors: [COLORS.primaryStart, COLORS.primaryEnd, COLORS.white],
      locations: [0.08, 0.15, 0.27],
    },
    full: {
      colors: [COLORS.primaryStart, COLORS.primaryEnd, COLORS.white],
      locations: [0.2, 0.3, 0.6],
    },
  };

  const {colors, locations} = variantConfig[variant];

  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={styles.gradient}>
      <SafeAreaView style={[styles.safeArea, style]}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
