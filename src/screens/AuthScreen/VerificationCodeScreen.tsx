import {useVerificationCodeInput} from '../../utils/useVerificationCodeInput ';
import {VerificationCodeInput} from '../../components/VerificationCodeInput';

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import LoginScreenLogo from '../../assets/svg/LoginScreenLogo.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/stacks/AuthStack';
import ScreenLayout from '../ScreenLayout/ScreenLayout';

type Props = NativeStackScreenProps<
  AuthStackParamList,
  'VerificationCodeScreen'
>;

const VerificationCodeScreen: React.FC<Props> = ({navigation}) => {
  const {code, inputsRef, timer, updateCode, reset} =
    useVerificationCodeInput(6);

  const [isInvalid, setIsInvalid] = useState(false);

  const handleComplete = (value: string) => {
    if (value === '123456') {
      Alert.alert('✅ Código correcto');
      navigation.navigate('ChangePasswordScreen');
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  };

  const handleResend = () => {
    reset(); // limpia inputs y reinicia el timer
    setIsInvalid(false); // limpia estado de error
    inputsRef.current[0]?.focus();
  };

  return (
    <ScreenLayout variant="start">
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.header}>
              <LoginScreenLogo width={108} height={108} />
              <Text style={styles.title}>
                Ingresa el código de verificación
              </Text>
              <Text style={styles.subtitle}>
                Te hemos enviado un código de 4 dígitos a tu correo electrónico
              </Text>
              <Text style={styles.subtitle}>
                {' '}
                Por favor, introdúcelo aquí para continuar con el
                restablecimiento de tu contraseña.
              </Text>
            </View>

            <View style={styles.inputGroup}>
              <VerificationCodeInput
                code={code}
                inputsRef={inputsRef}
                isInvalid={isInvalid}
                errorMessage={
                  isInvalid ? 'Código incorrecto. Intenta de nuevo.' : ''
                }
                timer={timer}
                onChange={updateCode}
                onBackspace={(index: number) => updateCode(index - 1, '')}
                onComplete={handleComplete}
                onResend={handleResend}
              />
            </View>

            <TouchableOpacity
              style={[styles.footer, timer > 0 && styles.resendButtonDisabled]}
              onPress={handleResend}
              disabled={timer > 0}>
              <Text style={styles.footerText}>
                ¿No recibiste el código?{' '}
                <Text style={styles.link}>
                  {timer > 0
                    ? `Reenviar código (${timer}s)`
                    : 'Reenviar código'}
                </Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    color: '#404040',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
    color: '#000000',
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingLeft: 1,
  },
  error: {
    color: '#EC7047',
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
    paddingLeft: 1,
  },
  buttonWrapper: {
    marginTop: 16,
    alignItems: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 16,
    color: '#000000',
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
  },
  altButtons: {
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingVertical: 'auto',
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'Quicksand-Regular',
    color: '#000000',
  },
  link: {
    fontFamily: 'Quicksand-Bold',
    color: '#81AD3F',
  },
  resendButtonDisabled: {
    opacity: 0.5,
  },
  resendButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default VerificationCodeScreen;
