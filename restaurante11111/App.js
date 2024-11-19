import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen'; // Sua tela Home com cardápio e fotos
import Contatos from './components/ContatoScreen';
import Sobre from './components/SobreScreen';
import Fotos from './components/FotosScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#f00', // Cor para a aba ativa
    }}
  >
    
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="folder-home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Contatos"
      component={Contatos}
      options={{
        tabBarLabel: 'Contatos',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-cash-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Sobre"
      component={Sobre}
      options={{
        tabBarLabel: 'Sobre',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Fotos"
      component={Fotos}
      options={{
        tabBarLabel: 'Fotos',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs} // Usando o Tab Navigator aqui
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
