
import { Product } from '../types.tsx';

export const buyProduct = (product: Product) => {
  const productWithQuantity = {
    ...product,
    quantity: 1, 
  };

  return {
    type: 'buy',
    payload: productWithQuantity,
  };
};
