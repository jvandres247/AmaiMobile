import React, {useState, ReactNode} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import COLORS from '../theme/colors';

type Item = {
  title: string;
  subtitle?: string;
  id: string;
};

type ButtonListProps = {
  data: Item[];
  onPressItem?: (value: string, e: GestureResponderEvent) => void;
  onSelectionChange?: (values: string[]) => void; // ✅ Nuevo callback
  icon?: ReactNode;
  multiselect?: boolean;
  type?: 'default' | 'secondary'; // ✅ Nuevo tipo para el botón
};

const ButtonList: React.FC<ButtonListProps> = ({
  data,
  onPressItem,
  onSelectionChange,
  icon,
  multiselect = false,
  type = 'default',
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handlePress = (item: Item, e: GestureResponderEvent) => {
    if (multiselect) {
      setSelectedValues(prev => {
        const isSelected = prev.includes(item.id);
        const updated = isSelected
          ? prev.filter(v => v !== item.id)
          : [...prev, item.id];
        onSelectionChange?.(updated);

        return updated;
      });
    } else {
      setSelectedValue(item.id);
    }

    onPressItem?.(item.id, e);
  };

  return (
    <View style={styles.container}>
      {data.map(item => {
        const isSelected = multiselect
          ? selectedValues.includes(item.id)
          : selectedValue === item.id;

        return type === 'secondary' ? (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.buttonSecondary,
              isSelected && styles.selectedButton,
            ]}
            onPress={e => handlePress(item, e)}>
            <View style={icon ? styles.contentIcon : styles.content}>
              {icon && <View style={styles.iconContainer}>{icon}</View>}
              <View style={styles.contentColumn}>
                <Text style={styles.textSecondary}>{item.title}</Text>
                <Text style={styles.labelSecondary}>{item.subtitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            key={item.id}
            style={[styles.button, isSelected && styles.selectedButton]}
            onPress={e => handlePress(item, e)}>
            <View style={icon ? styles.contentIcon : styles.content}>
              {icon && <View style={styles.iconContainer}>{icon}</View>}
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: '100%',
    height: 65,
    borderRadius: 8,
    backgroundColor: COLORS.fieldEmpty,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonSecondary: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: '100%',
    height: 112,
    borderRadius: 8,
    backgroundColor: COLORS.fieldEmpty,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  selectedButton: {
    backgroundColor: COLORS.fieldSelector,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  contentColumn: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 12,
  },
  iconContainer: {
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    color: COLORS.black,
    textAlign: 'center',
  },
  textSecondary: {
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    color: COLORS.black,
    textAlign: 'center',
  },
  labelSecondary: {
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
    color: COLORS.black,
    textAlign: 'center',
    paddingTop: 8,
  },
});

export default ButtonList;
