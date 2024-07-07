// SignUpScreen.tsx
import { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { AuthContext, useSession } from '../../context/AuthContext';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';


const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername ] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useSession();
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleSignUp = async () => {
    
    try {
      // Envoyer les informations d'identification à votre API pour vérification
      const response = await fetch(new URL ('users/register',process.env.EXPO_PUBLIC_API_URL).href, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email : email,
          username : username,
          password : password
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.data)
        
        await SecureStore.setItemAsync('authToken', JSON.stringify(data.data.token));

        signIn();
        router.replace('/(app)/(tabs)/');
        
      } else {
        console.log("Erreur d'envoie a l'api.")
      }
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.frameSpaceBlock}>
      <View style={styles.frameWrapper}>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../../assets/images/Frame.png")}
              />
              <Text style={styles.whatsYourPhone}>Inscrivez-vous.</Text>
            </View>
          </View>
            <View style={styles.frameGroup}>
                <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                autoComplete='email'
                inputMode='email'
                autoCapitalize="none"
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={[styles.mobileNumber, focused ? { borderColor: '#007AFF' }: {borderColor: '#A9A9A9'}]}
                />
                <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={[styles.mobileNumber, focused ? { borderColor: '#007AFF' }: {borderColor: '#A9A9A9'}]}
                />
                <TextInput
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={[styles.passwordTypo, focused ? { borderColor: '#007AFF' }: {borderColor: '#A9A9A9'}]}
                />

            </View>
  
        </View>
      </View>
      <View style={[styles.frameParent1, styles.frameSpaceBlock]}>
        <View style={styles.rectangleWrapper}>
          <View style={styles.frameItem} />
        </View>
        <Text style={styles.resterConnect}>
          <Text style={styles.seSouvenirDe}>Se souvenir de moi. {'\n'}</Text>
          <Text style={styles.motDePasse}>Mot de passe oublié</Text>
        </Text>
      </View>
    </View>
    <TouchableOpacity style={styles.button2} onPress={handleSignUp}>
      <Text style={styles.buttonText2}>Continuer</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  width: "100%",
},
frameSpaceBlock: {
  paddingVertical: 0,
  paddingHorizontal: 16,
},
resterConnectTypo: {
  lineHeight: 20,
  fontSize: 15,
  textAlign: "left",
},
passwordTypo: {
  fontSize: 16,
  color: "#797979",
  textAlign: "left",
  alignItems: "center",
  height: 54,
  borderColor: "#A9A9A9",
  backgroundColor: "#f3f3f3",
  borderRadius: 14,
  flexDirection: "row",
  borderWidth: 2,
  borderStyle: "solid",
  paddingVertical: 0,
  paddingHorizontal: 16,
  alignSelf: "stretch",
},
passwordWrapperBorder: {
  alignItems: "center",
  height: 54,
  borderColor: "#A9A9A9",
  backgroundColor: "#f3f3f3",
  borderRadius: 14,
  flexDirection: "row",
  borderWidth: 2,
  borderStyle: "solid",
  paddingVertical: 0,
  paddingHorizontal: 16,
  alignSelf: "stretch",
},
frameIcon: {
  width: 40,
  height: 40,
},
whatsYourPhone: {
  fontSize: 20,
  fontWeight: "700",
  color: "#1a1c29",
  marginTop: 10,
  textAlign: "left",
},
frameView: {
  marginTop:155,
  justifyContent: "center",
},
enterPhoneNumber: {
  marginTop: 8,
  color: "#797979",
  alignSelf: "stretch",
},
frameContainer: {
  justifyContent: "center",
  alignSelf: "stretch",
},
mobileNumber: {
  zIndex: 0,
  alignItems: "center",
  height: 54,
  borderColor: "#A9A9A9",
  backgroundColor: "#f3f3f3",
  borderRadius: 14,
  flexDirection: "row",
  borderWidth: 2,
  borderStyle: "solid",
  paddingVertical: 0,
  paddingHorizontal: 16,
  alignSelf: "stretch",
},
frameGroup: {
  gap:30,
  alignSelf: "stretch",
},
frameWrapper1: {
  marginTop: 24,
  alignSelf: "stretch",
},
passwordWrapper: {
  marginTop: 24,
},
frameWrapper: {
  width: 360,
},
frameItem: {
  borderRadius: 6,
  borderColor: "#d7d7d7",
  width: 20,
  height: 20,
  borderWidth: 2,
  borderStyle: "solid",
},
rectangleWrapper: {
  flexDirection: "row",
},
seSouvenirDe: {
  color: "#797979",
},
motDePasse: {
  textDecorationLine: "underline",
  color: "#007aff",
},
resterConnect: {
  height: 39,
  marginLeft: 9,
  flex: 1,
},
frameParent1: {
  flexDirection: "row",
  marginTop: 24,
  alignSelf: "stretch",
},
frameParent: {
  width: "100%",
  flex: 1,
  alignSelf: "stretch",
},
button2: {
  backgroundColor: "#007AFF",
  height: 54,
  borderRadius: 14,
  borderWidth:1,
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 325,
  marginLeft: 50
},
buttonText2: {
  color: "#ffffff",
  fontSize: 16,
  fontWeight: "600",
},
});

export default SignUpScreen;
