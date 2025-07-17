import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import GradientBackground from '../../components/GradientBackground';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  variant?: 'start' | 'full';
  scrollable?: boolean; // activa scroll si se necesita
};

const ScreenLayout: React.FC<Props> = ({
  children,
  style,
  variant = 'full',
  scrollable = false,
}) => {
  const content = scrollable ? (
    <ScrollView
      contentContainerStyle={[styles.content, style]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <SafeAreaView style={[styles.content, style]}>{children}</SafeAreaView>
  );

  return (
    <GradientBackground variant={variant}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {content}
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default ScreenLayout;
