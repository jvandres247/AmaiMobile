import {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';

export function useVerificationCodeInput(length: number = 6) {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (timer === 0) {
      return;
    }
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const reset = () => {
    setCode(Array(length).fill(''));
    setTimer(30);
  };

  const updateCode = (index: number, value: string) => {
    const updated = [...code];
    updated[index] = value;
    setCode(updated);
  };

  const isComplete = code.every(c => c !== '');
  const codeValue = code.join('');

  return {
    code,
    timer,
    inputsRef,
    updateCode,
    reset,
    isComplete,
    codeValue,
  };
}
