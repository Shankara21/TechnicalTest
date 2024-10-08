import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster richColors position="top-right" />
      <NextTopLoader />
      <Component {...pageProps} />
    </>
  );
}
