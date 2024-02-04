import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/LoginModals";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <LoginModal/>
          <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
      )
}
