// components/CartItem.tsx
import { CartItem } from '../types/types';

type CartItemProps = {
  item: CartItem;
  onRemoveFromCart: (productId: number) => void;
};

const CartItemComponent: React.FC<CartItemProps> = ({ item, onRemoveFromCart }) => {
  const { product, quantity } = item;

  return (
    <div>
      {product.title} - ${product.price} x {quantity}
      <button onClick={() => onRemoveFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default CartItemComponent;
