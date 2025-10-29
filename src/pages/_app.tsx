import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
import { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App({ Component, pageProps }:AppProps) {
  return (
    <CartProvider>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </CartProvider>
  );
}

export default App;
