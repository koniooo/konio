import "styles/reset.css";
import "styles/global.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", setFillHeight);
    setFillHeight();
  });
  return <Component {...pageProps} />;
}

export default MyApp;
