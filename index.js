/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'; // ① SIEMPRE primero
import {enableScreens} from 'react-native-screens'; // ② Importa
enableScreens();

AppRegistry.registerComponent(appName, () => App);
