import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import ProfileScreen from '../../screens/Home/ProfileScreen';
import SettingsScreen from '../../screens/Home/SettingsScreen';
import COLORS from '../../theme/colors';
import {Flower, Clover, Sprout, ChartLine} from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const getTabBarIcon =
  (iconName: string) =>
  ({color, size}: {color: string; size: number}) => {
    switch (iconName) {
      case 'flower':
        return <Flower size={size} color={color} />;
      case 'chart':
        return <ChartLine size={size} color={color} />;
      case 'clover':
        return <Sprout size={size} color={color} />;
      case 'sprout':
        return <Clover size={size} color={color} />;
      default:
        return <Flower size={size} color={color} />; // ícono por defecto
    }
  };

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        let iconName: string;
        let headerTitle: string;

        switch (route.name) {
          case 'Inicio':
            iconName = 'flower';
            headerTitle = 'Inicio';
            break;
          case 'Tendencias':
            iconName = 'chart';
            headerTitle = 'Tendencias';
            break;
          case 'Descubre':
            iconName = 'clover';
            headerTitle = 'Descubre';
            break;
          case 'Mi Jardín':
            iconName = 'sprout';
            headerTitle = 'Mi Jardín';
            break;
          default:
            iconName = 'ellipse';
            headerTitle = route.name;
        }

        return {
          headerShown: false,
          headerTitle: headerTitle,
          tabBarIcon: getTabBarIcon(iconName),
          tabBarActiveTintColor: COLORS.main, // color activo
          tabBarInactiveTintColor: COLORS.description, // color inactivo
          tabBarStyle: {
            backgroundColor: COLORS.white,
            height: 80,
            paddingBottom: 5,
          },
        };
      }}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Tendencias" component={ProfileScreen} />
      <Tab.Screen name="Descubre" component={SettingsScreen} />
      <Tab.Screen name="Mi Jardín" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
