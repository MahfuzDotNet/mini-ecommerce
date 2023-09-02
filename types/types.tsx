export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category:string;
    image: string;
    rating: Rating;
  }

  export interface Rating {
    rate: number;
    count: number;

  }

  export type CartItem = {
    product: Product;
    quantity: number;
  };
  
  export type AppState = {
    cart: CartItem[];
  };