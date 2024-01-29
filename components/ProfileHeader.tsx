// ProfileHeader.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.container}>
    <View style={[styles.avatar1, styles.avatarFlexBox]}></View>
      <View style={styles.userInfoSection}>
        <Text style={styles.userName}>Doe John</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Modifier le profil</Text>
          <MaterialIcons name="edit" size={20} color="black" />
        </TouchableOpacity>
      
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  avatarFlexBox: {
    alignItems: "center",
    flexDirection: "row"
},
avatar1: {
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: 40,
    height: 40,
    overflow: "hidden"
},
  userInfoSection: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 16,
    marginRight: 4,
  },
});

export default ProfileHeader;
