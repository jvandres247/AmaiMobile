import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Text,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import COLORS from '../theme/colors';

type IconButtonGroupProps = {
  buttons: {
    id: string;
    Icon: React.FC<SvgProps>;
  }[];
  onSelect?: (id: string) => void; // 🔹 para selección simple
  onMultiSelect?: (ids: string[]) => void; // 🔹 para selección múltiple
  selectedId?: string | null;
  selectedIds?: string[];
  labels?: {
    id: string;
    text: string;
  }[];
  multiSelect?: boolean;
};

const IconButtonGroup: React.FC<IconButtonGroupProps> = ({
  buttons,
  onSelect,
  onMultiSelect,
  selectedId,
  selectedIds,
  labels,
  multiSelect = false,
}) => {
  const [internalSelectedIds, setInternalSelectedIds] = useState<string[]>(
    selectedIds || [],
  );

  const scales = useRef(buttons.map(() => new Animated.Value(1))).current;

  useEffect(() => {
    if (selectedIds) {
      setInternalSelectedIds(selectedIds);
    }
  }, [selectedIds]);

  const handlePress = (id: string, index: number) => {
    Animated.sequence([
      Animated.spring(scales[index], {
        toValue: 1.15,
        useNativeDriver: true,
      }),
      Animated.spring(scales[index], {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    if (multiSelect) {
      setInternalSelectedIds(prev => {
        const isSelected = prev.includes(id);
        const newSelection = isSelected
          ? prev.filter(item => item !== id)
          : [...prev, id];

        onMultiSelect?.(newSelection); // 🔹 Usa el callback de multiselección
        return newSelection;
      });
    } else {
      onSelect?.(id); // 🔹 Usa el callback de selección simple
    }
  };

  const isSelected = (id: string) => {
    return multiSelect ? internalSelectedIds.includes(id) : selectedId === id;
  };

  return (
    <View
      style={[
        styles.container,
        labels ? styles.gapButtonLabel : styles.gapButton,
      ]}>
      {buttons.map(({id, Icon}, index) => {
        const active = isSelected(id);
        const label = labels?.find(l => l.id === id)?.text;

        return (
          <View key={id} style={styles.itemContainer}>
            <TouchableWithoutFeedback onPress={() => handlePress(id, index)}>
              <Animated.View
                style={[
                  label ? styles.buttonLabel : styles.button,
                  {
                    transform: [{scale: scales[index]}],
                    backgroundColor: active ? COLORS.btnIcon : 'transparent',
                    borderWidth: active ? 2 : 0,
                    borderColor: active ? COLORS.btnIcon : 'transparent',
                  },
                ]}>
                <Icon width={60} height={60} />
              </Animated.View>
            </TouchableWithoutFeedback>

            {label ? (
              <Text
                style={[
                  styles.label,
                  {color: active ? COLORS.btnIcon : COLORS.titles},
                ]}>
                {label}
              </Text>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default IconButtonGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  gapButton: {
    gap: 1,
  },
  gapButtonLabel: {
    gap: 25,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 11,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
});
