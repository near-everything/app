import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import initFirebaseClientSDK from "../app/firebaseClient";
import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";

initFirebaseClientSDK();

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider attribute="class">
            {getLayout(<Component {...pageProps} />)}
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </AuthProvider>
  );
}
