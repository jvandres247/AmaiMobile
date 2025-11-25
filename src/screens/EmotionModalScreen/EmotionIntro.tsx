import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import LoginScreenBioLogo from '../../assets/svg/LoginScreenBioLogo.svg';
import COLORS from '../../theme/colors';
import {Heart, Sticker, ChartLine} from 'lucide-react-native';

const steps = [
  {
    icon: <Heart size={24} color={COLORS.emphasis} />,
    title: 'Introspección:',
    description: `Observar cómo te sientes, aunque sea ${'\n'} solo a veces, te ayuda a entenderte ${'\n'} mejor.`,
  },
  {
    icon: <ChartLine size={24} color={COLORS.emphasis} />,
    title: 'Encontrar patrones:',
    description: `Registrar una emoción principal, otras ${'\n'} que la acompañan y su posible causa${'\n'}revela patrones.`,
  },
  {
    icon: <Sticker size={24} color={COLORS.emphasis} />,
    title: 'Sugerencias personalizadas:',
    description: `Nos permite ofrecerte sugerencias ${'\n'} personalizadas para cuidarte y crecer ${'\n'} contigo.`,
  },
];

const EmotionIntro = () => {
  const navigation = useNavigation<any>();

  return (
    <ScreenLayout variant="emotion">
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.closeIcon}>✖</Text>
          </TouchableOpacity>
        </View>

        {/* Frase en el centro */}
        <View style={styles.center}>
          <LoginScreenBioLogo width={130} height={160} />
          <Text style={styles.centerText}>
            ¿Por qué registrar tus {'\n'} emociones?
          </Text>
          <Text style={styles.secondText}>Escucharte también es florecer.</Text>

          {steps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <View style={styles.iconColumn}>
                <View style={styles.iconBox}>{step.icon}</View>
                {index < steps.length - 1 && <View style={styles.dottedLine} />}
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>{step.title}</Text>
                <Text style={styles.description}>{step.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Botón cerrar abajo */}
        <View style={styles.buttonWrapper}>
          <Button
            text="¡Empecemos!"
            size="xl"
            variant="tertiary"
            onPress={() => navigation.navigate('SelectEmotion')}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconColumn: {
    alignItems: 'center',
    marginRight: 12,
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 8,
    backgroundColor: COLORS.fieldEmpty,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dottedLine: {
    width: 2,
    flex: 1,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: COLORS.txtLinks,
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: COLORS.others,
    fontWeight: 'regular',
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Lato',
  },
  description: {
    color: '#333',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Lato',
    fontWeight: 'regular',
  },
  // MODAL
  modalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topText: {
    flex: 1, // ocupa todo el espacio disponible
    textAlign: 'center', // centra el texto horizontalmente
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  closeIcon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    fontFamily: 'Raleway-Medium',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  secondText: {
    fontSize: 18,
    fontFamily: 'Lato',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: COLORS.emphasis,
    marginBottom: 50,
  },
  buttonWrapper: {
    marginBottom: 0,
  },
});

export default EmotionIntro;
