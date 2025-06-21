// components/VerificationCodeInput.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';

type Props = {
  code: string[];
  inputsRef: React.RefObject<(TextInput | null)[]>;
  isInvalid?: boolean;
  errorMessage?: string;
  timer: number;
  onChange: (index: number, value: string) => void;
  onBackspace: (index: number) => void;
  onComplete: (code: string) => void;
  onResend: () => void;
};

export const VerificationCodeInput: React.FC<Props> = ({
  code,
  inputsRef,
  isInvalid = false,
  errorMessage = '',
  timer,
  onChange,
  onBackspace,
  onComplete,
  onResend,
}) => {
  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;
    onChange(index, text);

    if (text && index < code.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    const completed = code.map((c, i) => (i === index ? text : c));
    if (completed.every(c => c !== '')) {
      onComplete(completed.join(''));
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus();
      onBackspace(index);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => {
              inputsRef.current[index] = ref;
            }}
            style={[styles.input, isInvalid && styles.inputError]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
          />
        ))}
      </View>

      {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      <TouchableOpacity
        style={[styles.resendButton, timer > 0 && styles.resendButtonDisabled]}
        onPress={onResend}
        disabled={timer > 0}>
        <Text style={styles.resendButtonText}>
          {timer > 0 ? `Reenviar código (${timer}s)` : 'Reenviar código'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  input: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Poppins-Regular',
  },
  inputError: {
    backgroundColor: '#FF7D92',
    opacity: 0.1,
  },
  errorText: {
    color: '#EC7047',
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'regular',
    fontFamily: 'Quicksand-Regular',
  },
  resendButton: {
    marginTop: 20,
  },
  resendButtonDisabled: {
    opacity: 0.5,
  },
  resendButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
