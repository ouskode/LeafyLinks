import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';

interface Props {
    id: number;
    }

type User = {
    username: string;
    first_name: string | null;
    last_name: string | null;
    profile_pictures: string | null;
    bio: string | null;

  };
  
const ProfileModal: React.FC<Props> = ({id}) => {
    const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await SecureStore.getItemAsync('authToken');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch(new URL(`users/${id}`, process.env.EXPO_PUBLIC_API_URL).href, {
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
    <View style={styles.contentBlockSmall}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require('../assets/images/iconuser3x.png')} // Ensure you use the correct path to your image
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{user.username}</Text>
        {/* <Text style={styles.timeAgo}>{user.email}</Text> */}
        <Text style={styles.commentText}>
          {user.bio}
        </Text>
      </View>
      <View style={styles.dividerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentBlockSmall: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    height: 'auto',
  },
  imageIcon: {
    width: 75,
    height: 75,
    borderRadius: 37.5, // Makes it round
    overflow: 'hidden',
    marginRight: 16,
  },
  textContainer: {
    flex: 1, // Take up the remaining space
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  timeAgo: {
    fontSize: 14,
    color: '#bdbdbd',
    marginTop: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#000',
    marginTop: 8,
  },
  dividerLine: {
    backgroundColor: '#e8e8e8',
    height: 1,
    marginTop: 16,
  },
});

export default ProfileModal;
