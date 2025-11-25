import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmotion = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Vista previa de tu frase ✨</Text>

      <Button title="Atrás" onPress={() => navigation.goBack()} />
      <Button
        title="Confirmar"
        onPress={() => navigation.navigate('QuestionEmotion')}
      />
    </View>
  );
};

export default ConfirmEmotion;
