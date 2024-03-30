import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { Text } from 'react-native';
import { useSession } from '../../context/AuthContext';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function AppLayout() {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
