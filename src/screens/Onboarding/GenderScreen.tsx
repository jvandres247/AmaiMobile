import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigation/stacks/OnboardingStack';
import ButtonList from '../../components/ButtonList';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import LoginScreenLogo from '../../assets/svg/LoginScreenLogo.svg';
import genderOptions from '../../json/gender.json';
import COLORS from '../../theme/colors';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'GenderScreen'>;

const GenderScreen: React.FC<Props> = ({navigation}) => {
  const handleGenderSelection = (value: string) => {
    console.log('Genero seleccionado', `Valor: ${value}`);
    navigation.navigate('GenderScreen');
  };

  return (
    <ScreenLayout variant="start">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <LoginScreenLogo width={108} height={108} style={styles.logo} />
          <Text style={styles.subtitle}>Conectemos contigo</Text>
          <Text style={styles.title}>¿Con qué género te identificas?</Text>
          <Text style={styles.subtitle}>(Selecciona una opción)</Text>
        </View>
        <ButtonList data={genderOptions} onPressItem={handleGenderSelection} />
        <View style={styles.altButtons}>
          <Button
            text="Regresar"
            size="m"
            variant="secondary"
            iconLeft={<Icon name="arrow-left" size={16} color="#404040" />}
            onPress={() => navigation.goBack()}
          />
          <Button
            text="Siguiente"
            size="m"
            variant="primary"
            iconRight={<Icon name="arrow-right" size={16} color="#FFFFFF" />}
            onPress={() => navigation.navigate('IntentionScreen')}
          />
        </View>
      </SafeAreaView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: 'transparent'},
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    color: COLORS.description,
    textAlign: 'center',
  },
  altButtons: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingVertical: 'auto',
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});

export default GenderScreen;
