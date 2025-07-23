import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import Button from '../../components/Button';
import {useAppContext} from '../../context/AppContext';

const ProfileCreationScreen = () => {
  const {setCompletedOnboarding} = useAppContext();

  const handleHomeScreen = () => {
    setCompletedOnboarding(true);
  };

  return (
    <ScreenLayout variant="start">
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>¡Pantalla final completada! 🎉</Text>

        <View style={styles.buttonWrapper}>
          <Button
            text="Crear cuenta"
            size="xl"
            variant="primary"
            onPress={handleHomeScreen}
          />
        </View>
      </SafeAreaView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 24, fontWeight: '600'},
  buttonWrapper: {
    marginTop: 16,
    alignItems: 'center',
  },
});

export default ProfileCreationScreen;
