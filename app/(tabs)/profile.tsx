import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import ProfileHeader from '../../components/ProfileHeader';
import UserInfo from '../../components/UserInfo';
import UserProfileCommentary from '../../components/UserProfileCommentary';



export default function TabProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileHeader></ProfileHeader>
      <UserInfo></UserInfo>
      <Text style={styles.title}>Bio</Text>
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum pharetra libero at dapibus.</Text>
      <View style={styles.separator}/>
      <UserProfileCommentary></UserProfileCommentary>
      <Text style={styles.title}>Plantes à garder</Text>
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
    paddingVertical:10,
    fontWeight: 'bold',
    alignSelf: "stretch",
    justifyContent: 'flex-start'
    
  },
  subtitle: {
    alignSelf: "stretch",
    fontSize: 12,
    lineHeight: 20,
  },
  separator: {
		marginVertical: 5,
		height: 1,
		width: '95%',
		backgroundColor: '#303030',
    opacity: 0.2
	  },
});
