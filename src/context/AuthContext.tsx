import { createContext, useState } from "react";
import firebase from "../firebase/config";
import User from "@/model/User";
import { useRouter } from "next/router";

interface AuthContextProps {
  user?: User;
  register?: (email: string, password: string) => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function normalizeUser(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    // normalize based on my /model/User.ts
    uid: userFirebase.uid,
    displayName: userFirebase.displayName!,
    email: userFirebase.email!,
    token,
    photoURL: userFirebase.photoURL!,
  };
}

export function AuthProvider(props: any) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  async function configSession(userFirebase: firebase.User | null) {
    if (userFirebase?.email) {
      const user = await normalizeUser(userFirebase);
      setUser(user);
      return user;
    } else {
      setUser(null);
      return false;
    }
  }
  
    async function register(email: string, password: string) {
      try {
        const resp = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        const user = resp.user;
      } catch (error) {
        console.log(error);
      }
    }

  async function login(email: string, password: string) {
    try {
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
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

export default AuthContext;