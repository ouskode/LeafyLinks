import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link, Stack, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Animated } from 'react-native';

export const unstable_settings = {

    initialRouteName: '(planteschild)',
  };


export default function Layout() {

  return (
    <><Stack
          screenOptions={{
              title: "Fleurs & Plantes ornementales",
              headerStyle: {
                  backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                  fontWeight: 'bold',
              },
          }} /><Stack.Screen name="(planteschild)" options={{ headerShown: false }} /></>
    
  );
}
