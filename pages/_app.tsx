import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Arimo } from "@next/font/google";

const ArimoFont = Arimo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className={ArimoFont.className}>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
