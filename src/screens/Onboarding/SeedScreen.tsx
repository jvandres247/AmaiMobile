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
import {useEmotionOnboarding} from '../../hooks/useEmotionOnboarding';
import {useOnboarding} from '../../hooks/useOnboarding';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'SeedScreen'>;
interface ApiItem {
  id: string;
  name: string;
  represents: string;
}

interface ComponentItem {
  id: string;
  title: string;
  subtitle: string;
}

const SeedScreen: React.FC<Props> = ({navigation}) => {
  const {setPlantId} = useOnboarding();
  const handleAgeSelection = (value: string) => {
    console.log('Semilla seleccionada', `Valor: ${value}`);
    setPlantId(value);
  };

  const {activePlants, loading, error} = useEmotionOnboarding();

  const parseItems = (items: ApiItem[]): ComponentItem[] =>
    items.map(({id, name, represents}) => ({
      id,
      title: name,
      subtitle: represents,
    }));

  console.log('Active Plants desde el hook:', parseItems(activePlants));

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

        {loading ? (
          <Text>Cargando opciones...</Text>
        ) : error ? (
          <Text>Error al cargar opciones. Intenta de nuevo.</Text>
        ) : (
          <ButtonList
            data={parseItems(activePlants)}
            onPressItem={handleAgeSelection}
            icon={<LoginScreenBioLogo width={75} height={92} />}
            type="secondary"
          />
        )}
        <View style={styles.altButtons}>
          <Button
            text="Regresar"
            size="m"
            variant="secondary"
            iconLeft={<Icon name="arrow-left" size={16} color="#404040" />}
            onPress={() => navigation.goBack()}
          />
          <Button
            text="Empezar"
            size="m"
            variant="tertiary"
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
