// SignUpScreen.tsx
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { AuthContext, useSession } from '../../context/AuthContext';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername ] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useSession();

  const handleSignUp = async () => {
    
    try {
      // Envoyer les informations d'identification à votre API pour vérification
      const response = await fetch('https://leafylinks.maxim-le-cookie.fr/api/users/register', {
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
        // Stocker le jeton d'authentification en toute sécurité
        await SecureStore.setItemAsync('authToken', JSON.stringify(data.data.token));
        // Fermer le modal ou rediriger vers une autre page
        signIn();
        router.replace('/(app)/(tabs)/');
        
      } else {
        // Gérer les erreurs d'authentification
      }
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="S'inscrire" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default SignUpScreen;
