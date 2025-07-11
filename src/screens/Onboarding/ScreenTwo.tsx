import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootStack';
import ButtonList from '../../components/ButtonList';

type Props = NativeStackScreenProps<RootStackParamList, 'ScreenTwo'>;

const ScreenTwo: React.FC<Props> = ({navigation}) => {
  const items = ['⚽ Fútbol', '🏎️ Fórmula 1', '🎮 Videojuegos'];

  return (
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
            onPressItem={() => navigation.navigate('ScreenThree')}
          />
        </View>
      </View>
    </SafeAreaView>
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

export default ScreenTwo;
