import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigation/stacks/OnboardingStack';
import ButtonList from '../../components/ButtonList';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import ageOptions from '../../json/ageRanges.json';
import LoginScreenLogo from '../../assets/svg/LoginScreenLogo.svg';
import COLORS from '../../theme/colors';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'AgeScreen'>;

const AgeScreen: React.FC<Props> = ({navigation}) => {
  const handleAgeSelection = (value: string) => {
    console.log('Edad seleccionada', `Valor: ${value}`);
    navigation.navigate('GenderScreen');
  };

  return (
    <ScreenLayout variant="start">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <LoginScreenLogo width={108} height={108} style={styles.logo} />
          <Text style={styles.subtitle}>Conectemos contigo</Text>
          <Text style={styles.title}>¿Cuál es tu rango de edad?</Text>
          <Text style={styles.subtitle}>(Selecciona una opción)</Text>
        </View>
        <ButtonList data={ageOptions} onPressItem={handleAgeSelection} />
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
});

export default AgeScreen;
