import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const ScreenThree = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>¡Pantalla 3 completada! 🎉</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 24, fontWeight: '600'},
});

export default ScreenThree;
