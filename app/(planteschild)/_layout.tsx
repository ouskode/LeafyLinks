import { Link, Stack, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Animated } from 'react-native';
import AddButton from '../../components/AddButton';

export const unstable_settings = {

    initialRouteName: '(planteschild)',
  };


export default function Layout() {

  return (
    <Stack
          screenOptions={{
              title: "Fleurs & Plantes ornementales",
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    <AddButton/>
                  </Pressable>
                </Link>
              ),
                  
          }} />
    
  );
}
