import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "@/context/AppContext";
import { AuthProvider } from "@/context/AuthContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
