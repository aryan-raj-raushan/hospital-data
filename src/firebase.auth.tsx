// FirebaseAuthProvider.js (or FirebaseAuthProvider.tsx)
import React, { useEffect, useState, useContext, createContext } from "react";
import { firebaseAuth } from "./firebase.config";

// Create a context for Firebase authentication
const FirebaseAuthContext = createContext(null);

export const useFirebaseAuth = () => {
  const user = useContext(FirebaseAuthContext);
  return user;
};

export const FirebaseAuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((authUser: any) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <FirebaseAuthContext.Provider value={user}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};
