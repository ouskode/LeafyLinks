import { Link, Redirect, Stack, Tabs } from 'expo-router';
import React from 'react';
import {Text, Pressable, useColorScheme, Animated } from 'react-native';
import { useSession } from '../../../context/AuthContext';


export const unstable_settings = {

    initialRouteName: '(crud)',
  };


export default function Layout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }
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
