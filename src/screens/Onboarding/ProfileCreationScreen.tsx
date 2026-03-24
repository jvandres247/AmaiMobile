import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import {useAppContext} from '../../context/AppContext';
import LoginScreenBioLogo from '../../assets/svg/LoginScreenBioLogo.svg';
import COLORS from '../../theme/colors';
import BreathingButton from '../../components/BreathingButton';

const ProfileCreationScreen = () => {
  const {setCompletedOnboarding} = useAppContext();

  const handleHomeScreen = () => {
    setCompletedOnboarding(true);
  };

  return (
    <ScreenLayout variant="start">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <LoginScreenBioLogo width={247} height={305} />
          <View style={styles.welcomeMessage}>
            <Text style={styles.title}>
              Preparando tu espacio para{'\n'} florecer...
            </Text>
            <Text style={styles.subtitle}>
              Estamos creando un jardín a tu medida, para acompañarte en cada
              paso de tu crecimiento interior. {'\n'} {'\n'} Gracias por confiar
              en Amaï.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <BreathingButton onPress={handleHomeScreen} />
          <Text style={styles.profile}>
            Creando perfil... {'\n'} {'\n'} Esto puede tardar unos segundos.
          </Text>
        </View>
      </SafeAreaView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    color: COLORS.description,
    textAlign: 'center',
    marginBottom: 10,
  },
  profile: {
    fontSize: 12,
    fontFamily: 'Quicksand-Regular',
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  altButtons: {
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingBottom: 50,
  },
  welcomeMessage: {
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default ProfileCreationScreen;
