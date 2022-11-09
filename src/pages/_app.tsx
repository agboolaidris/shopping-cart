import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import GlobalStateProvider from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}

export default MyApp;
