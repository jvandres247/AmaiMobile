import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootStack';
import ButtonList from '../../components/ButtonList';

type Props = NativeStackScreenProps<RootStackParamList, 'ScreenOne'>;

const ScreenOne: React.FC<Props> = ({navigation}) => {
  const items = ['🍔 Hamburguesa', '🌮 Taco', '🥗 Ensalada'];

  return (
    <SafeAreaView style={styles.container}>
      {/* Lista principal */}
      <ButtonList data={items} onPressItem={label => console.log(label)} />

      {/* Botón “Siguiente” pegado abajo */}
      <View style={styles.bottom}>
        <ButtonList
          data={['Siguiente']}
          onPressItem={() => navigation.navigate('ScreenTwo')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  bottom: {marginTop: 'auto'}, // empuja al final (flex‑end)
});

export default ScreenOne;
