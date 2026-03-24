//import liraries
import React from 'react';
import LoginScreenBioLogo from '../../assets/svg/LoginScreenBioLogo.svg';
import CustomCarousel from '../../components/CustomCarousel';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useAppContext} from '../../context/AppContext';

const carouselData = [
  {
    image: <LoginScreenBioLogo width={247} height={230} />,
    title: 'Bienvenido a Amaï ✨',
    description: `Tu espacio para florecer desde adentro.Un lugar para cuidar tus emociones, cultivar hábitos conscientes y reconectar contigo. Florece a tu ritmo, con calma y dulzura.
 Tu camino interior comienza aquí. ¿Estás listo para empezar?`,
  },
  {
    image: <LoginScreenBioLogo width={247} height={230} />,
    title: 'Explora, siente, crece.',
    description:
      'Registra cómo te sientes, recibe sugerencias para reconectar contigo, reflexiona en tu diario emocional y acompaña el crecimiento de tu planta interior.',
  },
  {
    image: <LoginScreenBioLogo width={247} height={230} />,
    title: 'Cada emoción cuenta',
    description:
      'Amaï te ayuda a entender tus estados de ánimo, ver tu evolución con el tiempo y florecer en tus propios ritmos.',
  },
  {
    image: <LoginScreenBioLogo width={247} height={230} />,
    title: 'Planta tu semilla',
    description: `Este es tu espacio seguro para pausar, 
respirar y crecer desde adentro 🌱 
Elige tu primera planta y acompáñala 
durante este nuevo ciclo.
 Descubre cómo florece contigo, día a día.`,
  },
];

const WelcomeScreen = () => {
  const {setIsFirstTime, setInitialAuthScreen} = useAppContext();

  const handleStart = () => {
    setInitialAuthScreen('SignUpScreen');
    setIsFirstTime(false);
  };
  const handleLogin = () => {
    setInitialAuthScreen('LoginScreen');
    setIsFirstTime(false);
  };
  return (
    <ScreenLayout variant="full">
      <SafeAreaView style={styles.safeArea}>
        <CustomCarousel
          data={carouselData}
          onPrimaryAction={handleStart}
          onSecondaryAction={handleLogin}
        />
      </SafeAreaView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default WelcomeScreen;
