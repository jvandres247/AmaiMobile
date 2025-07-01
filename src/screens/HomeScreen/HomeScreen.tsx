import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import LoginScreenBioLogo from '../../assets/svg/LoginScreenBioLogo.svg';

const HomeScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.content}>
      <LoginScreenBioLogo width={247} height={230} />
      <Text style={styles.title}>¡Bienvenid@ a Amaï! 🌸</Text>
      <Text style={styles.description}>
        Estamos muy felices de que estés aquí. Este es tu espacio seguro para
        sentir, crecer y florecer a tu ritmo.
      </Text>
      <Text style={styles.subtitle}>
        Tu jardín emocional acaba de comenzar. 🌱✨
      </Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1, // ocupa todo el alto disponible
    paddingHorizontal: 20,
    alignItems: 'center', // centra horizontalmente
    justifyContent: 'center', // centra verticalmente
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'Quicksand-Regular',
    marginTop: 20,
    color: '#404040',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Quicksand-Regular',
  },
});

export default HomeScreen;
