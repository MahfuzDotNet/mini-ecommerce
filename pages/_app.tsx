import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CartProvider } from '../contexts/cartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
