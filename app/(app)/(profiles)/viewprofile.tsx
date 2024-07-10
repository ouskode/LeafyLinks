import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import ProfileHeader from '../../../components/ProfileHeader';
import UserInfo from '../../../components/UserInfo';
import UserProfileCommentary from '../../../components/UserProfileCommentary';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import OtherProfileHeader from '../../../components/OtherProfileHeader';
import OtherUserInfo from '../../../components/OtherUserInfo';



export default function viewProfile() {

  const id = useRoute().params

  return (
    <View style={styles.container}>
      <OtherProfileHeader userId={id}></OtherProfileHeader>
      <OtherUserInfo userId={id}></OtherUserInfo>
      <View style={styles.blank}/>

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
  blank: {
    height: 300
  }
    
});
