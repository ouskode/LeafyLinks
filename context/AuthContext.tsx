// src/contexts/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Créez les types pour les valeurs du contexte
type AuthContextType = {
  userToken: string | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  register: (email: string,username:string, password: string) => Promise<void>;
};

// Initialisez votre contexte avec une valeur par défaut
export const AuthContext = createContext<AuthContextType>({
  userToken: null,
  isLoading: true,
  signIn: async () => {},
  signOut: async () => {},
  register: async () => {},
});

// Créez un type pour les props du fournisseur
type AuthProviderProps = {
  children: ReactNode;
};

// Créez le fournisseur de contexte
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Chargez le jeton au démarrage de l'application
  useEffect(() => {
    const loadToken = async () => {
      let token: any;
      try {
        token = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.error('Failed to load the token');
      }
      setUserToken(token);
      setIsLoading(false);
    };

    loadToken();
  }, []);

  // Connectez l'utilisateur
  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post('api/users/login', { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
    } catch (error) {
      console.error('Failed to sign in', error);
    }
  };

  // Déconnectez l'utilisateur
  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };

  const register = async (email: string,username: string, password: string) => {
    try {
      const response = await axios.post('api/users/register', { email,username, password });
      const { token } = response.data;
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
    } catch (error) {
      console.error('Failed to register', error);
    }
  };

  return (
    <AuthContext.Provider value={{ userToken, isLoading, signIn, signOut, register }}>
      {!isLoading ? children : null} // Affichez les enfants lorsque le chargement est terminé
    </AuthContext.Provider>
  );
};
