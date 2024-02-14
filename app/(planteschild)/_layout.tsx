import { Link, Stack, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Animated } from 'react-native';
import AddButton from '../../components/AddButton';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

export const unstable_settings = {

    initialRouteName: '(planteschild)',
  };


export default function Layout() {

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
