import React from 'react';
import { useStorageState } from './useStorageState';

// Définition du type pour le contexte d'authentification
interface AuthContextType {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

const AuthContext = React.createContext<AuthContextType>({
  signIn: () => null, // Vous pouvez choisir de ne rien retourner dans ces fonctions ou d'ajuster selon la logique désirée.
  signOut: () => null,
  session: null,
  isLoading: false,
});

// Utilisation de l'interface pour les props du SessionProvider pour une meilleure typage des enfants (children)
interface SessionProviderProps extends React.PropsWithChildren<{}> {}

// Ce hook peut être utilisé pour accéder aux informations de l'utilisateur.
export function useSession(): AuthContextType {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export const SessionProvider: React.FC<SessionProviderProps> = (props) => {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Implémentez ici la logique de connexion
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
