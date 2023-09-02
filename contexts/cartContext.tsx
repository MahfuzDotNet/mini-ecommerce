// context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types/types';

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
};

type CartProviderProps = {
    children: ReactNode; // Specify children as a valid prop
  };

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
