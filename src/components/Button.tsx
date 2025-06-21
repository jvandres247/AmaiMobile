import React, {ReactNode} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  text: string;
  size: ButtonSize;
  variant: ButtonVariant;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const WIDTHS: Record<ButtonSize, number> = {
  xs: 80,
  s: 120,
  m: 160,
  l: 200,
  xl: 370,
};

const VARIANT_STYLES: Record<
  ButtonVariant,
  {backgroundColor: string; textColor: string}
> = {
  primary: {backgroundColor: '#81AD3F', textColor: '#ffffff'},
  secondary: {backgroundColor: '#ffffff', textColor: '#404040'},
  tertiary: {backgroundColor: '#28a745', textColor: '#ffffff'},
};

const Button: React.FC<ButtonProps> = ({
  text,
  size,
  variant,
  onPress,
  disabled = false,
  iconLeft,
  iconRight,
}) => {
  const variantStyle = VARIANT_STYLES[variant];
  const buttonWidth = WIDTHS[size];

  const buttonStyle: ViewStyle = {
    backgroundColor: variantStyle.backgroundColor,
    width: buttonWidth,
    height: 55,
    paddingVertical: 10,
    borderRadius: 16,
    borderColor: variant === 'secondary' ? '#81AD3F' : 'transparent',
    borderWidth: variant === 'secondary' ? 1 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    opacity: disabled ? 0.5 : 1,
  };

  const textStyle: TextStyle = {
    color: variantStyle.textColor,
    fontSize: 20,
    fontWeight: 'semibold',
    marginHorizontal: 6,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 3,
  };

  const iconStyle: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={disabled ? undefined : onPress}
      activeOpacity={disabled ? 1 : 0.7}
      disabled={disabled}>
      {iconLeft && <View style={iconStyle}>{iconLeft}</View>}
      <Text style={textStyle}>{text}</Text>
      {iconRight && <View style={iconStyle}>{iconRight}</View>}
    </TouchableOpacity>
  );
};

export default Button;
