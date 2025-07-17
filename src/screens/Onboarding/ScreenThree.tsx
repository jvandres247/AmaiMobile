import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import ScreenLayout from '../ScreenLayout/ScreenLayout';

const ScreenThree = () => (
  <ScreenLayout variant="start">
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>¡Pantalla 3 completada! 🎉</Text>
    </SafeAreaView>
  </ScreenLayout>
);

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 24, fontWeight: '600'},
});

export default ScreenThree;
