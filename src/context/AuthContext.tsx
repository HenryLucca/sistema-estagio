import { createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import firebase from "../backend/firebase/config";
import User from "@/model/AuthUser";
import { useRouter } from "next/router";

interface AuthContextProps {
  user?: User;
  loading?: boolean;
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
  };
}

function manageCookie(logged: boolean) {
  if (logged) {
    Cookie.set("sistema-estagio-auth", "true", {
      expires: 7, // 7 days
    });
  } else {
    Cookie.remove("sistema-estagio-auth");
  }
}

export function AuthProvider(props: any) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // other functions are asyncronous and we want to show the user a loading screen during this time

  async function configSession(userFirebase: firebase.User | null) {
    if (userFirebase?.email) {
      // if user is logged
      const user = await normalizeUser(userFirebase);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function register(email: string, password: string) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await configSession(resp.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, password: string) {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      await configSession(resp.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      if (resp.user?.email) {
        const user = await normalizeUser(resp.user!);
        setUser(user);
      }
      await configSession(resp.user);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSession(null);
      router.push("/auth");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // onIdTokenChanged is called when the user logs in or logs out, works as a observer
    // when the component is unmounted, the observer is canceled
    if (Cookie.get("sistema-estagio-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(configSession);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user || undefined,
        loading,
        register,
        login,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
