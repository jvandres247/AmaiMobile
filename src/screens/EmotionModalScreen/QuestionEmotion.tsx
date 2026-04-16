import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from 'react-native';
import Button from '../../components/Button';
import COLORS from '../../theme/colors';
import IconButtonGroup from '../../components/IconButtonGroup';
import {useNavigation, useRoute} from '@react-navigation/native';
import {QuestionEmotionRouteProp} from '../../navigation/modals/types';

//========== Emotions Utils ==========
import {
  emotionSelectedText,
  emotionPhraseText,
  emotionOptions,
  factorOptions,
  emotionBoxLabel,
  emotionBoxPlaceholder,
  iconEmotionOptions,
  factorIconOptions,
} from '../../utils/emotionInfo';

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

const QuestionEmotion = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<QuestionEmotionRouteProp>();

  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);
  const [value, onChangeText] = useState('');

  const handleEmotionsMultiSelect = (ids: string[]) => {
    setSelectedEmotions(prev => {
      const added = ids.find(id => !prev.includes(id));
      const removed = prev.find(id => !ids.includes(id));

      if (added) {
        console.log('Se agregó:', added);
      }
      if (removed) {
        console.log('Se quitó:', removed);
      }

      return ids;
    });
  };

  const handleFactorsMultiSelect = (ids: string[]) => {
    setSelectedFactors(prev => {
      const added = ids.find(id => !prev.includes(id));
      const removed = prev.find(id => !ids.includes(id));

      if (added) {
        console.log('Se agregó:', added);
      }
      if (removed) {
        console.log('Se quitó:', removed);
      }

      return ids;
    });
  };

  // 🧠 Aquí recibes el parámetro que mandaste desde SelectEmotion
  const {emotion} = route.params;

  const handleFinish = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  const showBigEmotionIcon = (id: string | null) => {
    switch (id) {
      case 'joy':
        return <BigJoy width={108} height={108} />;
      case 'sad':
        return <BigSad width={108} height={108} />;
      case 'frustation':
        return <BigFrustation width={108} height={108} />;
      case 'anxiety':
        return <BigAnxiety width={108} height={108} />;
      case 'calm':
        return <BigCalm width={108} height={108} />;
      case 'neutral':
        return <BigNeutral width={108} height={108} />;
      default:
        return <EmptyEmotion width={108} height={108} />;
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
      source={emotionBackground(emotion)}
      style={styles.container}
      resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.closeIcon}>←</Text>
            </TouchableOpacity>
          </View>

          {/* Frase en el centro */}
          <View style={styles.center}>
            <View style={styles.shadowContainer}>
              {showBigEmotionIcon(emotion)}
            </View>
            <View style={styles.badgeContainer}>
              <Text style={styles.centerEmotionText}>
                {emotionSelectedText(emotion)}
              </Text>
            </View>
            <Text style={styles.centerText}>{emotionPhraseText(emotion)}</Text>
            <View style={styles.selectContainer}>
              <Text style={styles.leftText}>
                ¿Qué otras emociones están presentes?
              </Text>
              <IconButtonGroup
                multiSelect
                buttons={iconEmotionOptions(emotion)}
                labels={emotionOptions(emotion)}
                selectedIds={selectedEmotions}
                onMultiSelect={handleEmotionsMultiSelect}
              />
            </View>
            <View style={styles.selectContainer}>
              <Text style={styles.leftText}>
                Posibles factores que influyen
              </Text>
              <IconButtonGroup
                multiSelect
                buttons={factorIconOptions(emotion)}
                labels={factorOptions(emotion)}
                selectedIds={selectedFactors}
                onMultiSelect={handleFactorsMultiSelect}
              />
            </View>
            <View style={styles.selectContainer}>
              <Text style={styles.leftText}>{emotionBoxLabel(emotion)}</Text>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={80}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={emotionBoxPlaceholder(emotion)}
                style={styles.textInput}
              />
            </View>
          </View>

          {/* Botón continuar */}
          <View style={styles.buttonWrapper}>
            <Button
              text="Guardar"
              size="xl"
              variant="tertiary"
              onPress={handleFinish}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

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
    color: COLORS.txtLinks,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    marginBottom: 15,
  },
  leftText: {
    fontSize: 16,
    fontFamily: 'Lato-Black',
    textAlign: 'left',
    marginBottom: 15,
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
    fontSize: 16,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    color: COLORS.titles,
  },
  buttonWrapper: {
    marginBottom: 0,
  },
  shadowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  badgeContainer: {
    width: 120,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 20,
    zIndex: 1,
  },
  selectContainer: {
    width: 370,
    height: 147,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: COLORS.fieldEmpty,
    marginBottom: 15,
  },
  textInput: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    height: 75,
  },
});

export default QuestionEmotion;
