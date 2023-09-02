import React, { useState, useEffect } from 'react';
import ProductCard from '../components/productCard';
import { Product } from '../types/types';
import { useCart } from '../contexts/cartContext'; // Make sure you import useCart



const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

//   const handleAddToCart = (product: Product) => {
//     addToCart(product); // Call the addToCart function when a product is added to the cart
//   };

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
      <h1 className="text-2xl font-semibold mb-4">Shop Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {   
            products.map((product) => (
            <ProductCard key={product.id} product={ product } />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
