import ProductCard from '../components/productCard';
import { Product } from '../types/types';
import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/cartContext'; // Make sure you import useCart



const Home: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);

  const { addToCart } = useCart(); // Use the addToCart function from the context

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Welcome to My E-Commerce Store</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
      <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
