import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import COLORS from '../theme/colors';

interface IconButtonProps {
  text: string;
  secondaryText?: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  checked?: boolean; // 👈 nuevo prop opcional (estado inicial)
  onPress?: (data: {text: string; checked: boolean}) => void;
}

const IconButtonCheck: React.FC<IconButtonProps> = ({
  text,
  secondaryText,
  icon,
  iconBgColor = 'transparent',
  checked = false,
  onPress,
}) => {
  // 👇 estado interno del checkbox
  const [isChecked, setIsChecked] = useState(checked);

  // 👇 si el padre cambia la prop `checked`, se sincroniza el estado interno
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handlePress = (value: boolean) => {
    setIsChecked(value); // actualiza visualmente
    onPress?.({text, checked: value}); // notifica al padre
  };

  const renderIcon = () => (
    <View style={[styles.iconWrapper, {backgroundColor: iconBgColor}]}>
      {icon}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {renderIcon()}
        <View style={styles.textContent}>
          <Text style={styles.text}>{text}</Text>
          {secondaryText && (
            <Text style={styles.secondary}>{secondaryText}</Text>
          )}
        </View>
      </View>

      <View style={styles.rightSection}>
        <BouncyCheckbox
          size={22}
          fillColor={COLORS.fieldSelector} // fondo cuando está check
          unFillColor="#FFFFFF"
          iconStyle={{borderColor: COLORS.btnIcon}}
          innerIconStyle={{borderWidth: 2}}
          iconImageStyle={{tintColor: COLORS.main}} // check blanco sobre fondo verde
          onPress={handlePress} // 👈 manejador propio
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    marginLeft: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.description,
    fontFamily: 'Lato',
  },
  secondary: {
    fontSize: 12,
    color: COLORS.description,
    opacity: 0.7,
  },
  iconWrapper: {
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButtonCheck;
