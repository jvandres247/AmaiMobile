import React from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';
import {useLogout} from '../../hooks/useLogout';

const SettingsScreen = ({}) => {
  const {logout} = useLogout();

  const onCloseSesion = async () => {
    try {
      await logout();
      await AsyncStorage.removeItem('auth-storage');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        text="Cerrar Sesion"
        size="xl"
        variant="tertiary"
        onPress={onCloseSesion}
      />
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
