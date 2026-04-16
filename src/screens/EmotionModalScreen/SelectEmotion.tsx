import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import COLORS from '../../theme/colors';
import IconButtonGroup from '../../components/IconButtonGroup';

//========== Small Emotions Icons ==========
import SmallJoy from '../../assets/svg/SmallJoy.svg';
import SmallSad from '../../assets/svg/SmallSad.svg';
import SmallFrustation from '../../assets/svg/SmallFrustation.svg';
import SmallAnxiety from '../../assets/svg/SmallAnxiety.svg';
import SmallCalm from '../../assets/svg/SmallCalm.svg';
import SmallNeutral from '../../assets/svg/SmallNeutral.svg';

//========== Big Emotions Icons ============

import BigJoy from '../../assets/svg/BigJoy.svg';
import BigSad from '../../assets/svg/BigSad.svg';
import BigFrustation from '../../assets/svg/BigFrustation.svg';
import BigAnxiety from '../../assets/svg/BigAnxiety.svg';
import BigCalm from '../../assets/svg/BigCalm.svg';
import BigNeutral from '../../assets/svg/BigNeutral.svg';
import EmptyEmotion from '../../assets/svg/EmptyEmotion.svg';

//========== Image Backgrounds ==============
const GradientMulticolor = require('../../assets/png/GradientMulticolor.png');
const NeutralGradient = require('../../assets/png/NeutralBG.png');
const GradientJoy = require('../../assets/png/JoyBG.png');
const GradientSad = require('../../assets/png/SadBG.png');
const GradientAnxiety = require('../../assets/png/AnxietyBG.png');
const GradientCalm = require('../../assets/png/CalmBG.png');
const GradientFrustation = require('../../assets/png/FrustationBG.png');

const SelectEmotion = () => {
  const navigation = useNavigation<any>();
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  const handleSelect = (id: string | null) => {
    // Si el usuario toca el mismo ícono, se deselecciona
    setSelectedEmotion(prev => (prev === id ? null : id));

    console.log(id);
  };

  const emotionSelectedText = (id: string | null) => {
    switch (id) {
      case 'joy':
        return 'Feliz';
      case 'sad':
        return 'Tristeza';
      case 'frustation':
        return 'Frustración';
      case 'anxiety':
        return 'Ansiedad';
      case 'calm':
        return 'En calma';
      case 'neutral':
        return 'Neutral';
      default:
        return '';
    }
  };

  const showBigEmotionIcon = (id: string | null) => {
    switch (id) {
      case 'joy':
        return <BigJoy width={250} height={250} />;
      case 'sad':
        return <BigSad width={250} height={250} />;
      case 'frustation':
        return <BigFrustation width={250} height={250} />;
      case 'anxiety':
        return <BigAnxiety width={250} height={250} />;
      case 'calm':
        return <BigCalm width={250} height={250} />;
      case 'neutral':
        return <BigNeutral width={250} height={250} />;
      default:
        return <EmptyEmotion width={280} height={280} />;
    }
  };

  const emotionBackground = (id: string | null) => {
    switch (id) {
      case 'neutral':
        return NeutralGradient;
      case 'joy':
        return GradientJoy;
      case 'sad':
        return GradientSad;
      case 'anxiety':
        return GradientAnxiety;
      case 'calm':
        return GradientCalm;
      case 'frustation':
        return GradientFrustation;
      default:
        return GradientMulticolor;
    }
  };

  return (
    <ImageBackground
      source={emotionBackground(selectedEmotion)}
      style={styles.container}
      resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.closeIcon}>✖</Text>
            </TouchableOpacity>
          </View>

          {/* Frase en el centro */}
          <View style={styles.center}>
            <Text
              style={
                selectedEmotion !== null
                  ? styles.secondSelectedText
                  : styles.secondText
              }>
              Conecta con tu interior
            </Text>
            <Text style={styles.centerText}>¿Cómo te sientes hoy?</Text>
            <View style={styles.shadowContainer}>
              {showBigEmotionIcon(selectedEmotion)}
            </View>
            <Text style={styles.centerEmotionText}>
              {emotionSelectedText(selectedEmotion)}
            </Text>

            <IconButtonGroup
              buttons={[
                {id: 'frustation', Icon: SmallFrustation},
                {id: 'anxiety', Icon: SmallAnxiety},
                {id: 'sad', Icon: SmallSad},
                {id: 'neutral', Icon: SmallNeutral},
                {id: 'calm', Icon: SmallCalm},
                {id: 'joy', Icon: SmallJoy},
              ]}
              onSelect={handleSelect}
              selectedId={selectedEmotion}
            />
          </View>

          {/* Botón continuar */}
          <View style={styles.buttonWrapper}>
            <Button
              text="Continuar"
              size="xl"
              variant="tertiary"
              onPress={() =>
                navigation.navigate('QuestionEmotion', {
                  emotion: selectedEmotion,
                })
              }
              disabled={!selectedEmotion}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SelectEmotion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    fontFamily: 'Raleway-Regular',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '600',
  },
  secondText: {
    fontSize: 16,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    color: COLORS.others,
    marginBottom: 10,
  },
  secondSelectedText: {
    fontSize: 16,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    color: COLORS.titles,
    marginBottom: 10,
  },
  centerEmotionText: {
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  buttonWrapper: {
    marginBottom: 0,
  },
  shadowContainer: {
    width: 230,
    height: 230,
    borderRadius: 121,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
});
