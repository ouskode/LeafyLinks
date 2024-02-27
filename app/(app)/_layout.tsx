import React from 'react';
import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(root)" />
      <Stack.Screen
        name="login"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
