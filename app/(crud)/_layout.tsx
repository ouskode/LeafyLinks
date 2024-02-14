import { Link, Stack, Tabs } from 'expo-router';
import React from 'react';
import { Pressable, useColorScheme, Animated } from 'react-native';


export const unstable_settings = {

    initialRouteName: '(crud)',
  };


export default function Layout() {

  return (
    <Stack
          screenOptions={{
            title: "",
            headerStyle:{
              backgroundColor: 'transparent'
            },
            
                  
          }} />
    
  );
}
