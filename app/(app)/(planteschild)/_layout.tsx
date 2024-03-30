import { Redirect, Stack } from 'expo-router';
import { Pressable, Text,  } from 'react-native';
import AddButton from '../../../components/AddButton';

import React from 'react';
import { useSession } from '../../../context/AuthContext';

export const unstable_settings = {

    initialRouteName: '(planteschild)',
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
              headerRight: () => (
                  <Pressable>
                    <AddButton path={'/addplants'}/>
                  </Pressable>
              ),
             /*  headerLeft: () => (
                <Link href="../index">
                <Pressable>
                  {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
                </Pressable>
                </Link>
            ),             */
          } }>
    </Stack>
    
  );
}
