import React from 'react';
import { Product } from '../types/types';
import { useCart } from '../contexts/cartContext';


  interface ProductCardProps {
    product: Product;
   // onAddToCart: (product: Product) => void;
  }


  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCartClick = () => {         
        //console.log('product:   ' + addToCart(product));
        addToCart(product); // Call addToCart with the selected product
      }
 
    return (
    <div className="border p-4 m-4">
       <button onClick={() => handleAddToCartClick()} className="bg-blue-500 text-white px-2 py-1 mt-2">
        Add to Cart
      </button>
    <h2 className="text-lg font-semibold"> Product Id: {product.id}</h2>
    <h2 className="text-lg font-semibold">Product Title: {product.title}</h2>      
    <h2 className="text-lg font-semibold"><p className="text-gray-600">Price: ${product.price}</p> </h2>
    <img src={product.image} alt={product.title} className="mb-2" /> 
</div>
    );
};

export default ProductCard;
