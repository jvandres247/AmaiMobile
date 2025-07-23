import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Button from '../../components/Button';
import LoginScreenBioLogo from '../../assets/svg/LoginScreenBioLogo.svg';

const LoginScreenBio = () => {
  const handleLogin = () => {
    console.log('Iniciando sesión con biométricos...');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <LoginScreenBioLogo width={247} height={305} />
        <Text style={styles.title}>Bienvenido, Nombre ✨</Text>
        <Text style={styles.subtitle}>Nos alegra tenerte aqui</Text>
      </View>

      <View style={styles.altButtons}>
        <Button
          text="Iniciar sesión con biometricos"
          size="xl"
          variant="primary"
          onPress={handleLogin}
        />
        <Button text="Utilizar contraseña" size="xl" variant="secondary" />
      </View>

      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footerText}>
          <Text style={styles.link}>Crea nueva cuenta</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 100,
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
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    color: '#000000',
  },
  link: {
    fontFamily: 'Quicksand-Bold',
    color: '#81AD3F',
  },
});

export default LoginScreenBio;
