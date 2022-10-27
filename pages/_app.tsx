import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "urql";
import { clientQuery } from "../lib/urql";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={clientQuery}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
