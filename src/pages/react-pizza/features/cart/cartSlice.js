import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],

  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'suprem',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((pizza) => pizza.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const pizza = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },
    decreaseItemQuantity(state, action) {
      const pizza = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      pizza.quantity--;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
      if (pizza.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, acc) => sum + acc.quantity, 0);

const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, acc) => sum + acc.totalPrice, 0);

const getCart = (state) => state.cart.cart;

const getCurrentQuantity = (id) => (state) => state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;

const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  getTotalCartQuantity,
  getTotalCartPrice,
  getCart,
  getCurrentQuantity,
};
export default cartSlice.reducer;
