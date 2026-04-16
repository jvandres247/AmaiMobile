import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import COLORS from '../theme/colors';

type Props = {
  code: string[];
  inputsRef: React.RefObject<(TextInput | null)[]>;
  isInvalid?: boolean;
  errorMessage?: string;
  timer: number;
  disabled?: boolean;
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
  onChange,
  onBackspace,
  onComplete,
  disabled,
}) => {
  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) {
      return;
    }
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
            editable={!disabled}
          />
        ))}
      </View>

      {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
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
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: COLORS.btnIcon,
    textAlign: 'center',
    fontSize: 28,
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
});
