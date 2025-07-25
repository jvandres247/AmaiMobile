import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigation/stacks/OnboardingStack';
import ButtonList from '../../components/ButtonList';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import LoginScreenLogo from '../../assets/svg/LoginScreenLogo.svg';
import LoginScreenBioLogo from '../../assets/svg/LoginScreenBioLogo.svg';
import COLORS from '../../theme/colors';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import seedType from '../../json/seedType.json';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'SeedScreen'>;

const SeedScreen: React.FC<Props> = ({navigation}) => {
  const handleAgeSelection = (value: string) => {
    console.log('Semilla seleccionada', `Valor: ${value}`);
  };

  return (
    <ScreenLayout variant="start">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <LoginScreenLogo width={108} height={108} style={styles.logo} />
          <Text style={styles.subtitle}>Tu comienzo</Text>
          <Text style={styles.title}>Elige tu primera semilla 🌸</Text>
          <Text style={styles.subtitle}>
            Cada planta representa una energía o emoción{'\n'}para trabajar
            durante este ciclo de 3 meses.{'\n'}Crecerá contigo, reflejando tu
            proceso interior.
          </Text>
        </View>
        <ButtonList
          data={seedType}
          onPressItem={handleAgeSelection}
          icon={<LoginScreenBioLogo width={75} height={92} />}
          type="secondary" // Assuming this is a prop to differentiate from other lists
        />
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
            onPress={() => navigation.navigate('ProfileCreationScreen')}
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
    textAlign: 'center',
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

export default SeedScreen;
