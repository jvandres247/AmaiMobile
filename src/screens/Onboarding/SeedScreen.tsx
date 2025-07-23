import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigation/stacks/OnboardingStack';
import ButtonList from '../../components/ButtonList';
import ScreenLayout from '../ScreenLayout/ScreenLayout';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'SeedScreen'>;

const SeedScreen: React.FC<Props> = ({navigation}) => {
  const items = ['⚽ Fútbol', '🏎️ Fórmula 1', '🎮 Videojuegos'];

  return (
    <ScreenLayout variant="start">
      <SafeAreaView style={styles.container}>
        <ButtonList data={items} onPressItem={label => console.log(label)} />

        {/* Botones “Regresar” y “Siguiente” */}
        <View style={styles.bottomRow}>
          <View style={styles.flexOne}>
            <ButtonList
              data={['Regresar']}
              onPressItem={() => navigation.goBack()}
            />
          </View>
          <View style={styles.flexOne}>
            <ButtonList
              data={['Siguiente']}
              onPressItem={() => navigation.navigate('ProfileCreationScreen')}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  flexOne: {flex: 1},
});

export default SeedScreen;
