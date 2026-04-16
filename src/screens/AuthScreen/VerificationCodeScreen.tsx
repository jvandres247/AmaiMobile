import {VerificationCodeInput} from '../../components/VerificationCodeInput';
import {useVerificationCodeInput} from '../../utils/useVerificationCodeInput ';

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

import {useConfirmEmail} from '../../hooks/useConfirmationEmail';
import {useVerificationStore} from '../../store/verificationStore';
import {useLogin} from '../../hooks/useLogin';

type Props = NativeStackScreenProps<
  AuthStackParamList,
  'VerificationCodeScreen'
>;

const VerificationCodeScreen: React.FC<Props> = ({route}: Props) => {
  const {code, inputsRef, timer, updateCode, reset} =
    useVerificationCodeInput(6);

  const {email, password} = route.params;

  const [isInvalid, setIsInvalid] = useState(false);

  const {confirmEmail} = useConfirmEmail();
  const {isLoading, error} = useVerificationStore();
  const {login} = useLogin();

  const handleComplete = async (value: string) => {
    try {
      setIsInvalid(false);
      await confirmEmail(email, value);
      await login(email, password);
      Alert.alert('✅ Cuenta verificada', 'Bienvenido 🎉');
    } catch (err) {
      setIsInvalid(true);
    }
  };

  const handleResend = () => {
    reset();
    setIsInvalid(false);
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
                Te hemos enviado un código de 6 dígitos a tu correo electrónico{' '}
                {email}.
              </Text>

              <Text style={styles.subtitle}>
                Por favor, introdúcelo aquí para continuar.
              </Text>
            </View>

            <View style={styles.inputGroup}>
              <VerificationCodeInput
                code={code}
                inputsRef={inputsRef}
                isInvalid={isInvalid || !!error}
                errorMessage={
                  isInvalid
                    ? 'Código incorrecto. Intenta de nuevo.'
                    : error || ''
                }
                timer={timer}
                onChange={updateCode}
                onBackspace={(index: number) => updateCode(index - 1, '')}
                onComplete={handleComplete}
                onResend={handleResend}
                disabled={isLoading}
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
  error: {
    color: '#EC7047',
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
    paddingLeft: 1,
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
});

export default VerificationCodeScreen;
