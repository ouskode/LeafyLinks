import { Stack } from 'expo-router';
import React from 'react';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="login"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
