import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '../../components/Button';
import LoginScreenLogo from '../../assets/svg/LoginScreenLogo.svg';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validate = () => {
    let isValid = true;
    if (!email.includes('@')) {
      setEmailError('Ingresa un email válido');
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = () => {
    if (validate()) {
      console.log('Iniciando sesión...');
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (emailError && text.includes('@')) {
      setEmailError('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <LoginScreenLogo width={108} height={108} />
            <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
            <Text style={styles.subtitle}>
              No te preocupes, te ayudamos a recuperarla. Ingresa tu correo y te
              enviaremos un enlace para restablecerla.
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Correo electrónico <Text style={{color: '#EC7047'}}>*</Text>
            </Text>
            <TextInput
              placeholder="Correo electrónico"
              style={styles.input}
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailError !== '' && (
              <Text style={styles.error}>{emailError}</Text>
            )}
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              text="Enviar Código"
              size="xl"
              variant="primary"
              onPress={handleLogin}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    marginBottom: 50,
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
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
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
});

export default ForgotPasswordScreen;
