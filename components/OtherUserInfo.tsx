import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View} from "react-native";
import * as SecureStore from 'expo-secure-store';

type prop = {
    userId: any;
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

const UserInfo: React.FC<prop> = (userId) => {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await SecureStore.getItemAsync(`authToken`);
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch(new URL (`users/${userId}`,process.env.EXPO_PUBLIC_API_URL).href, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if (!response.ok) {
          throw new Error(
              `Erreur d\'authentification ${response.status}`
          );
        }
        const data = await response.json();
        setUser(data.data);
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
    <View style={styles.list}>
      <View style={styles.item}>
        <View style={styles.frame}>
          <Text style={styles.icon} numberOfLines={1}>📞</Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Phone</Text>
        </View>
        <Text style={styles.subtitle}>{user.phone ? user.phone : 'Non renseigné'}</Text>
        <Text style={styles.itemChild} />
      </View>
      <View style={styles.separator} />

      <View style={styles.item}>
        <View style={styles.frame}>
          <Text style={styles.icon} numberOfLines={1}>📧</Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Email</Text>
        </View>
        <Text style={styles.subtitle}>{user.email}</Text>
        <Text style={styles.itemChild} />
      </View>
      <View style={styles.separator} />

      <View style={styles.item}>
        <View style={styles.frame}>
          <Text style={styles.icon} numberOfLines={1}>🏷️</Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Status</Text>
        </View>
        <Text style={styles.subtitle}>{user.is_admin ? 'Admin' : user.is_botanic ? 'Botaniste':'Utilisateur' }</Text>
        <Text style={styles.itemChild} />
      </View>
      <View style={styles.separator} />
      <Text style={styles.title}>Bio</Text>
      <Text style={styles.subtitle}>{user.bio}</Text>
      <View style={styles.separator}/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frame: {
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    height: 32,
    width: 32,
  },
  icon: {
    marginTop: -16,
    marginLeft: -16,
    top: "50%",
    left: "50%",
    fontSize: 20,
    lineHeight: 32,
    textAlign: "center",
    color: "#000",
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  titleWrapper: {
    marginLeft: 8,
    flex: 1,
  },
  title: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: 14,
    color: "#000",
  },
  subtitle: {
    zIndex: 2,
    textAlign: "right",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 14,
    marginLeft: 8,
    color: "#000",
  },
  itemChild: {
    right: 0,
    bottom: -1,
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 3,
    overflow: "hidden",
    position: "absolute",
  },
  separator: {
		marginVertical: 5,
		height: 1,
		width: '95%',
		backgroundColor: '#303030',
    opacity: 0.2
	  },
});

export default UserInfo;
