/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'; // ① SIEMPRE primero
import {enableScreens} from 'react-native-screens'; // ② Importa
import {setupDevTools} from './src/utils/devTools';
enableScreens();

setupDevTools();

AppRegistry.registerComponent(appName, () => App);
