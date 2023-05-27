export interface Product {
    productId: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    
  }
  
  export interface State {
    basket: Product[];
    // Other properties
  }
  
  export interface Action {
    type: string;
    payload?: Product;
  }
  
  export const initialState: State = {
    basket: [],
  };

 

