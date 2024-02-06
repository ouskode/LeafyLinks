import { Link, Stack, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Animated } from 'react-native';
import AddButton from '../../components/AddButton';
import { Component } from 'react';
import PlantesChildsScreen from './plantschilds';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export const unstable_settings = {

    initialRouteName: '(planteschild)',
  };


export default function Layout() {

  return (
    <Stack
          screenOptions={{
              title: "",
              headerRight: () => (
                  <Pressable>
                    <AddButton path={'/addplants'}/>
                  </Pressable>
              ),          
          } }>
    <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({  }) => <FontAwesome name="home" color='blue' />,
        }}
      />
      <Tabs.Screen
        name="plante"
        options={{
          title: 'Plantes',
          tabBarIcon: ({ }) => <MaterialCommunityIcons name="flower-outline" color='green' />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign name="profile" color={color} />,
        }}
      />
    </Stack>
    
  );
}
