import { create } from "zustand";

import { CardStoreActionsType, CartStoreStateType } from "@/types";

const useCartStore = create<CartStoreStateType & CardStoreActionsType>(
  (set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (product) =>
      set((state) => ({
        cart: state.cart.filter((p) => p.id !== product.id),
      })),
    clearCart: () => set({ cart: [] }),
  }),
);

export default useCartStore;
