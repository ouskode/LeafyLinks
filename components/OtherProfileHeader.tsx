// ProfileHeader.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

type prop = {
    userId: number;
    };

type User = {
  id: number;
  username: string;
  email: string;
  phone: string | null;
  first_name: string | null;
  last_name: string | null;
  bio: string | null;
  is_botanic: boolean;
  is_garden: boolean;
  is_admin: boolean;
};

const OtherProfileHeader: React.FC<prop> = (userId) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await SecureStore.getItemAsync('authToken');
        if (!token) {
          throw new Error('No token found');
        }
        console.log(userId);
        const response = await fetch(new URL(`users/${userId.userId}`, process.env.EXPO_PUBLIC_API_URL).href, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.data);
        } else {
          console.log('Erreur d\'authentification');
        }
      } catch (error) {
        console.error('Erreur de connexion :', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <Text>Chargement...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.avatar1, styles.avatarFlexBox]}></View>
      <View style={styles.userInfoSection}>
        { user.first_name ? <Text style={styles.userName}>{user.first_name}</Text> : <Text style={styles.userName}>{user.username}</Text> }
        { user.last_name ? <Text style={styles.userName}>{user.last_name}</Text> : null }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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

export default OtherProfileHeader;
