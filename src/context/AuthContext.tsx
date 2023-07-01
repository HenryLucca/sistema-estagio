import { createContext, useState } from "react";
import firebase from "../firebase/config";
import User from "@/model/User";

interface AuthContextProps {
  user?: User;
  login?: (email: string, password: string) => Promise<void>;
  register?: (email: string, password: string) => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function normalizeUser(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken();
    return {
        // normalize based on my /model/User.ts
        id: userFirebase.uid,
        name: userFirebase.displayName!,
        email: userFirebase.email!,
    }
}

export function AuthProvider(props: any) {

  const [user, setUser] = useState<User>();

  async function login(email: string, password: string) {
    try {
      const resp = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = resp.user;
      
    } catch (error) {
      console.log(error);
    }
  }

  async function register(email: string, password: string) {
    try {
      const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = resp.user;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: user || undefined,
        login,
        register,
        logout: async () => {
          await firebase.auth().signOut();
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
