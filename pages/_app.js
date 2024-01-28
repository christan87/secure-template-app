import React from "react";
import "@/styles/reset.css";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
