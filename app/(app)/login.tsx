import React, { useState } from 'react';
import { Modal, Text, View, Button, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { useSession } from '../../context/AuthContext';
import { router } from 'expo-router';

const AuthModal = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useSession();

  const handleLogin = async () => {

    try {
      // Envoyer les informations d'identification à votre API pour vérification
      const response = await fetch('https://leafylinks.maxim-le-cookie.fr/api/users/login', {
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

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ paddingBottom: 15 }}>
          <Text>Login</Text>
          <TextInput
            placeholder="Email"
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Username"
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
  );
};

export default AuthModal;
