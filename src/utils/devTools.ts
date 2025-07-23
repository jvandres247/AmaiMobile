import AsyncStorage from '@react-native-async-storage/async-storage';

// Extend the global type to include clearAsyncStorage
declare global {
  var clearAsyncStorage: (() => Promise<void>) | undefined;
  var logAsyncStorage: (() => Promise<void>) | undefined;
}

export const setupDevTools = () => {
  if (__DEV__) {
    global.clearAsyncStorage = async () => {
      try {
        await AsyncStorage.clear();
        console.log('✅ AsyncStorage limpiado');
      } catch (e) {
        console.error('❌ Error al limpiar AsyncStorage:', e);
      }
    };

    global.logAsyncStorage = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
        const parsed = items.map(([key, value]) => {
          let parsedValue = value;
          try {
            parsedValue = JSON.parse(value as string);
          } catch (_) {}
          return {key, value: parsedValue};
        });
        console.log('🔍 Contenido de AsyncStorage:', parsed);
      } catch (e) {
        console.error('❌ Error al leer AsyncStorage:', e);
      }
    };
  }
};
