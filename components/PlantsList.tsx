import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ImageSourcePropType } from "react-native";
import ButtonAddToCart from "./ButtonAddToCart";
import HeartButton from "./HeartButton";
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import ButtonRemoveToCart from "./ButtonRemoveToCart";


type SelectionProps = {
  id: number;
  title: string;
  price: number;
  image: any;
  user_id: number;
};
type user = {
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
}

const PlantsList: React.FC<SelectionProps>  =  ({id, title, price, image, user_id}) => {

  const [user, setUser] = useState<user[]>([]);
  
  useEffect(() => {
   const fetchData = async () => {
     try {
       const token = await SecureStore.getItemAsync(`authToken`);
       if (!token) {
         throw new Error('No token found');
       }
       const response = await fetch(new URL ('users/me',process.env.EXPO_PUBLIC_API_URL).href, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
       if (!response.ok) {
         throw new Error(`API request failed with status ${response.status}`);
       }
       const data = await response.json();
 
       setUser(data.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };

   fetchData();
 }, []);

  return (
    <View style={styles.itemRowView}>
      <Image style={styles.mediaIcon} resizeMode="cover" source={image} />
      <View style={styles.detailsContainer}>
        <Text style={[styles.bostonLettuce, styles.textTypo]}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={[styles.text, styles.textTypo]}>{price}</Text>
          <Text style={styles.piece}> / Jours</Text>
        </View>
        <View style={styles.buttonContainer}>
        <HeartButton onPress={() => console.log('Ajouté aux favoris')} />
        <ButtonAddToCart onPress={() => router.navigate({ pathname: '/(planteschild)/plantsmodal', params: {id}})} />
        {(user.id) === user_id && <ButtonRemoveToCart onPress={() => fetch(new URL (`plants/${id}`,process.env.EXPO_PUBLIC_API_URL).href, {method: 'DELETE', headers:{Authorization: `Bearer ${SecureStore.getItemAsync(`authToken`)}`,}})} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRowView: {
    flexDirection: "row",
    height: 160,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mediaIcon: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    alignContent:"space-between"
  },
  bostonLettuce: {
    fontSize: 18,
    fontWeight: "600",
    color: "#064a09",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color: "#064a09",
  },
  piece: {
    fontSize: 16,
    marginLeft: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    gap:10,
    marginTop: 4,
  },
  buttonSecondary: {
    marginRight: 10,
    backgroundColor: "#0bce83",
    padding: 10,
    borderRadius: 8,
  },
  iconHeartWrapper: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d9d0e3",
    padding: 10,
    borderRadius: 8,
  },
  iconLayout: {
    width: 20,
    height: 20,
  },
  textTypo: {
    lineHeight: 22,
  },
});

export default PlantsList;
