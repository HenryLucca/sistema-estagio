import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "@/context/AppContext";
import { AuthProvider } from "@/context/AuthContext";
import { UserDataProvider } from "@/context/UserDataContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <UserDataProvider>
          <Component {...pageProps} />
        </UserDataProvider>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
