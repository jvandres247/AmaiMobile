import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validate = () => {
    let isValid = true;
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
    <View style={styles.container}>
      <Text style={styles.title}>AmaÏ</Text>

      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError !== '' && <Text style={styles.error}>{emailError}</Text>}

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
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color="#888"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
      {passwordError !== '' && (
        <Text style={styles.error}>{passwordError}</Text>
      )}

      <View style={styles.buttonWrapper}>
        <Button
          text="Iniciar sesión"
          size="m"
          variant="primary"
          onPress={handleLogin}
        />
        <View style={{height: 10}} />
        <Button
          text="Crear cuenta"
          size="m"
          variant="secondary"
          onPress={() => console.log('Ir a crear cuenta')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  error: {
    color: 'red',
    marginBottom: 8,
    fontSize: 14,
  },
  buttonWrapper: {
    marginTop: 16,
    alignItems: 'center',
  },
});
