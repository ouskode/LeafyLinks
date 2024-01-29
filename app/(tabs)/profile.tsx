import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import ProfileHeader from '../../components/ProfileHeader';
import UserInfo from '../../components/UserInfo';

import { Text, View } from '../../components/Themed';

export default function TabProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileHeader></ProfileHeader>
      <UserInfo></UserInfo>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
