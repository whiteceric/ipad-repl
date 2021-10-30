import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import { REPLScreen } from './components/REPLScreen';

const settingsImage = require('./assets/settings.png');

export type StackParamList = {
  Home: undefined;
  REPLScreen: { language: string }
}

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="REPLScreen" component={REPLScreen} options={
          { 
            headerShown: true,
            title: 'Python3',
            headerRight: () => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.headerSettingsButton}
                onPress={() => alert('This is a button!')}
              >
                <Image 
                  style={styles.settingsImage}
                  source={settingsImage}
                />
              </TouchableOpacity>
            ),
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerSettingsButton: {
  },
  settingsImage: {
    width: 30,
    height: 30,
    tintColor: "blue",
  },
});