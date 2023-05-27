import { State, Action, Product, initialState } from '../types.tsx';

const reducer = (state: State = initialState, action: Action = { type: '' }): State => {
  switch (action.type) {
    case 'buy': {
      const basket: Product[] = state.basket ? [...state.basket] : [];
      const existingIndex = basket.findIndex(
        (item) => item.productId === action.payload?.productId
      );
      if (existingIndex !== -1) {
        const updatedBasket = [...basket];
        updatedBasket[existingIndex] = {
          ...updatedBasket[existingIndex],
          quantity: updatedBasket[existingIndex].quantity + 1,
        };
        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        const { productId, quantity, name, price, description } = action.payload || {};
        if (productId !== undefined && quantity !== undefined && name !== undefined && price !== undefined && description !== undefined) {
          const newProduct: Product = {
            productId,
            quantity,
            name,
            price,
            description,
          };
          const updatedBasket = [...basket, newProduct];
          return {
            ...state,
            basket: updatedBasket,
          };
        }
      }
      return state;
    }
    case 'clearBasket': {
      return {
        ...state,
        basket: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
