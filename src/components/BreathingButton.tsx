import React, {useEffect, useRef} from 'react';
import {
  Animated,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
  Platform,
} from 'react-native';
import COLORS from '../theme/colors';

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  children?: React.ReactNode;
};

export default function BreathingButton({onPress, style, children}: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const shadowOpacity = useRef(new Animated.Value(0.3)).current;
  const elevation = useRef(new Animated.Value(6)).current;

  useEffect(() => {
    const breathe = Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.1,
            duration: 800,
            useNativeDriver: true, // SOLO para scale
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(shadowOpacity, {
            toValue: 0.5,
            duration: 800,
            useNativeDriver: false, // JS
          }),
          Animated.timing(shadowOpacity, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: false,
          }),
        ]),
        Animated.sequence([
          Animated.timing(elevation, {
            toValue: 10,
            duration: 800,
            useNativeDriver: false, // JS
          }),
          Animated.timing(elevation, {
            toValue: 6,
            duration: 800,
            useNativeDriver: false,
          }),
        ]),
      ]),
    );

    breathe.start();
    return () => breathe.stop();
  }, [scale, shadowOpacity, elevation]);

  const shadowStyle = Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowRadius: 4,
      shadowOpacity,
    },
    android: {
      elevation,
    },
  });

  return (
    <Animated.View style={[styles.shadowBase, shadowStyle]}>
      <Animated.View style={{transform: [{scale}]}}>
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
          {children}
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.silverGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowBase: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
      },
    }),
  },
});
