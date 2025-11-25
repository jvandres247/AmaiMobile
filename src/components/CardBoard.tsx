import React, {ReactNode, FC} from 'react';
import {View, StyleSheet, DimensionValue} from 'react-native';

type CardBoardProps = {
  height: DimensionValue;
  width: DimensionValue;
  marginTop?: number;
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
};

const CardBoard: FC<CardBoardProps> = ({
  height,
  width,
  children,
  marginTop,
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
        styles.card,
        {height, width, marginTop, alignItems: alignment[align]},
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    backgroundColor: '#fff', // opcional, para resaltar el card
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // para Android
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CardBoard;
