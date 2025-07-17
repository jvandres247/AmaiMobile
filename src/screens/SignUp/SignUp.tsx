import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFE from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import LoginScreenLogo from '../../assets/svg/LoginScreenLogo.svg';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');

  const validate = () => {
    let isValid = true;
    if (name.length < 6) {
      setNameError('El nombre debe tener al menos 6 caracteres');
      isValid = false;
    }
    if (!email.includes('@')) {
      setEmailError('Ingresa un email válido');
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = () => {
    if (validate()) {
      console.log('Iniciando sesión...');
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
    if (nameError && text.length >= 6) {
      setNameError('');
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (emailError && text.includes('@')) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (passwordError && text.length >= 6) {
      setPasswordError('');
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
            <Text style={styles.title}>Comienza tu camino 🌱</Text>
            <Text style={styles.subtitle}>
              Crea tu espacio personal para florecer.
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Nombre <Text style={{color: '#EC7047'}}>*</Text>
            </Text>
            <TextInput
              placeholder="Nombre"
              style={styles.input}
              value={name}
              onChangeText={handleNameChange}
              keyboardType="default"
              autoCapitalize="none"
            />
            {nameError !== '' && <Text style={styles.error}>{nameError}</Text>}
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

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Contraseña <Text style={{color: '#EC7047'}}>*</Text>
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Contraseña"
                style={[styles.input, {flex: 1, borderWidth: 0}]}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <IconFE
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#888"
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            </View>
            {passwordError !== '' && (
              <Text style={styles.error}>{passwordError}</Text>
            )}
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              text="Crear cuenta"
              size="xl"
              variant="primary"
              onPress={handleLogin}
            />
          </View>

          <Text style={styles.orText}>ó</Text>

          <View style={styles.altButtons}>
            <Button
              text="Crear cuenta con Google"
              size="xl"
              variant="secondary"
              iconLeft={<Icon name="arrow-left" size={16} color="#404040" />}
            />
            <Button
              text="Crear cuenta con Facebook"
              size="xl"
              variant="secondary"
              iconLeft={<Icon name="arrow-left" size={16} color="#404040" />}
            />
          </View>

          <TouchableOpacity style={styles.footer}>
            <Text style={styles.footerText}>
              ¿Ya tienes una cuenta?{' '}
              <Text style={styles.link}>Inicia Sesión</Text>
            </Text>
          </TouchableOpacity>
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
    marginBottom: 20,
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

export default SignUpScreen;
