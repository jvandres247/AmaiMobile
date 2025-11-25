import React from 'react';
import {View, StyleSheet, DimensionValue} from 'react-native';

type DividerProps = {
  width?: DimensionValue;
  thickness?: number;
  color?: string;
  orientation?: 'horizontal' | 'vertical';
  margin?: number;
  align?: 'left' | 'center' | 'right';
};

const Divider: React.FC<DividerProps> = ({
  width,
  thickness = 1,
  color = '#ccc',
  orientation = 'horizontal',
  margin = 5,
  align = 'center',
}) => {
  const alignment: Record<
    'left' | 'center' | 'right',
    'flex-start' | 'center' | 'flex-end'
  > = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  return (
    <View
      style={[
        styles.divider,
        orientation === 'horizontal'
          ? {
              width,
              height: thickness,
              marginVertical: margin,
              backgroundColor: color,
              alignSelf: alignment[align],
            }
          : {
              height: width,
              width: thickness,
              marginHorizontal: margin,
              backgroundColor: color,
              alignSelf: alignment[align],
            },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#ccc',
  },
});

export default Divider;
