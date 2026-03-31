import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useCounterStore} from '../../store/useCounterStore';

const SettingsScreen = () => {
  const {count, increment, decrement} = useCounterStore();

  const state = useCounterStore.getState();
  console.log(state);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
