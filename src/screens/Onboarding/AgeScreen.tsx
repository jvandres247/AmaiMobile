import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigation/stacks/OnboardingStack';
import ButtonList from '../../components/ButtonList';
import ScreenLayout from '../ScreenLayout/ScreenLayout';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'AgeScreen'>;

const AgeScreen: React.FC<Props> = ({navigation}) => {
  const items = ['🍔 Hamburguesa', '🌮 Taco', '🥗 Ensalada'];

  return (
    <ScreenLayout variant="start">
      <SafeAreaView style={styles.container}>
        {/* Lista principal */}
        <ButtonList data={items} onPressItem={label => console.log(label)} />

        <View style={styles.bottom}>
          <ButtonList
            data={['Siguiente']}
            onPressItem={() => navigation.navigate('GenderScreen')}
          />
        </View>
      </SafeAreaView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: 'transparent'},
  bottom: {marginTop: 'auto'},
});

export default AgeScreen;
