import React, {FC} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Button from '../../components/Button';
import LoginScreenBioLogo from '../../assets/svg/LoginScreenBioLogo.svg';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigation/stacks/OnboardingStack';
import ScreenLayout from '../ScreenLayout/ScreenLayout';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'Onboarding'>;

const Onboarding: FC<Props> = ({navigation}) => {
  return (
    <ScreenLayout variant="full">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <LoginScreenBioLogo width={247} height={305} />
          <Text style={styles.title}>¡Bienvenid@ a Amaï! 🌸</Text>
          <Text style={styles.subtitle}>
            Tu espacio para florecer desde adentro.
          </Text>
          <Text style={styles.subtitle}>
            Para acompañarte mejor, {'\n'} ¿nos cuentas un poco sobre ti? {'\n'}{' '}
            Así te ofreceremos herramientas, retos y {'\n'} recordatorios que
            realmente conecten contigo.
          </Text>
        </View>

        <View style={styles.footer}>
          <Button
            text="Sí, quiero empezar"
            size="xl"
            variant="primary"
            onPress={() => navigation.navigate('AgeScreen')}
          />
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
    marginTop: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    color: '#404040',
    textAlign: 'center',
    marginBottom: 10,
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
});

export default Onboarding;
