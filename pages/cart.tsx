// pages/cart.tsx
import { useCart } from '../contexts/cartContext';
import CartItemComponent from '../components/cartItem';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItemComponent key={item.product.id} item={item} onRemoveFromCart={removeFromCart} />
        ))
      )}
    </div>
  );
};

export default CartPage;
