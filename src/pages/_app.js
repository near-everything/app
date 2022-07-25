import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import store from "../app/store";
import { queryClient } from "../app/api";
import "../styles/globals.css";
import Layout from "../containers/Layout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          {getLayout(<Component {...pageProps} />)}
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
