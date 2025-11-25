import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import COLORS from '../theme/colors';

type IconPosition = 'top' | 'bottom' | 'left' | 'right';

interface IconButtonProps {
  text?: string;
  icon: React.ReactNode;
  iconPosition?: IconPosition;
  iconBgColor?: string;
  size?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  text,
  icon,
  iconPosition = 'left',
  iconBgColor = 'transparent', // por defecto transparente
  onPress,
  size = 12,
}) => {
  const isVertical = iconPosition === 'top' || iconPosition === 'bottom';

  const renderIcon = () => (
    <View
      style={[
        styles.iconWrapper,
        {backgroundColor: iconBgColor, padding: size},
      ]}>
      {icon}
    </View>
  );

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View
        style={[
          styles.content,
          isVertical ? {flexDirection: 'column'} : {flexDirection: 'row'},
        ]}>
        {iconPosition === 'top' || iconPosition === 'left' ? (
          <>
            {renderIcon()}
            <Text style={styles.text}>{text}</Text>
          </>
        ) : (
          <>
            <Text style={styles.text}>{text}</Text>
            {renderIcon()}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.description,
    margin: 4,
    fontFamily: 'Lato',
    marginTop: 10,
  },
  iconWrapper: {
    borderRadius: 50, // círculo
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
