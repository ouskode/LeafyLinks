import React, { createContext, ReactNode } from 'react';
import { useStorageState } from './useStorageState';

interface AuthContextProps {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession(): AuthContextProps {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production' && !value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return value;
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
