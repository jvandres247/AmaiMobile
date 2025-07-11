import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

type ButtonListProps = {
  /** Etiquetas de cada botón (ordenadas). */
  data: string[];
  /** Callback opcional por elemento. */
  onPressItem?: (label: string, e: GestureResponderEvent) => void;
};

const ButtonList: React.FC<ButtonListProps> = ({data, onPressItem}) => {
  return (
    <View style={styles.container}>
      {data.map(label => (
        <TouchableOpacity
          key={label}
          style={styles.button}
          onPress={e => onPressItem?.(label, e)}>
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%'},
  button: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#2563EB', // Tailwind blue‑600
    marginBottom: 12,
    alignItems: 'center',
  },
  text: {color: '#FFF', fontSize: 16, fontWeight: '600'},
});

export default ButtonList;
