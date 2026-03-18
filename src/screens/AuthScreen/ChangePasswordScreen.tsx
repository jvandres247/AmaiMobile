import React, {useState, FC} from 'react';
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
import IconFE from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import LoginScreenLogo from '../../assets/svg/LoginScreenLogo.svg';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import {useAppContext} from '../../context/AppContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/stacks/AuthStack';

type Props = NativeStackScreenProps<AuthStackParamList, 'ChangePasswordScreen'>;

const ChangePasswordScreen: FC<Props> = ({navigation}) => {
  const {setIsLoggedIn} = useAppContext();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [passwordError, setPasswordError] = useState('');

  const validate = () => {
    let isValid = true;

    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      isValid = false;
    }

    if (password !== passwordConfirm) {
      setPasswordError('Las contraseñas no coinciden');
      isValid = false;
    }
    return isValid;
  };

  const handleChangePassword = () => {
    if (validate()) {
      //setIsLoggedIn(true);
      navigation.navigate('LoginScreen');
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (passwordError && text.length >= 6) {
      setPasswordError('');
    }
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
              <Text style={styles.title}>Cambiar contraseña 🌱</Text>
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
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
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

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Confirmar contraseña <Text style={{color: '#EC7047'}}>*</Text>
              </Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Confirmar contraseña"
                  style={[styles.input, {flex: 1, borderWidth: 0}]}
                  value={passwordConfirm}
                  onChangeText={setPasswordConfirm}
                  secureTextEntry={!showPasswordConfirm}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                  <IconFE
                    name={showPasswordConfirm ? 'eye' : 'eye-off'}
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
                text="Guardar Contraseña"
                size="xl"
                variant="primary"
                onPress={handleChangePassword}
              />
            </View>
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
    marginBottom: 30,
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

export default ChangePasswordScreen;
