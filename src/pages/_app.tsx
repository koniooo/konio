import "src/styles/reset.css";
import "src/styles/global.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { usePageView, GoogleAnalytics } from "lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight / 100;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", setFillHeight);
    setFillHeight();
  }, []);

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
