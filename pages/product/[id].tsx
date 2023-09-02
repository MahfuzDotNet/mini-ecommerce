import React from 'react';
import { useRouter } from 'next/router';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const products: Product[] = [
  { id: 1, name: 'Product A', price: 10, description: 'Description for Product A', imageUrl: '/product-a.jpg' },
  { id: 2, name: 'Product B', price: 20, description: 'Description for Product B', imageUrl: '/product-b.jpg' }
  // Add more products
];

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return <div>Loading...</div>;
  }

  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="mb-2" />
      <p className="text-gray-600">${product.price}</p>
      <p className="mb-4">{product.description}</p>
      {/* Add more product details */}
    </div>
  );
};

export default ProductDetails;
