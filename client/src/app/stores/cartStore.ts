import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { CardStoreActionsType, CartStoreStateType } from "@/types";

const useCartStore = create<CartStoreStateType & CardStoreActionsType>()(
  persist(
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
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;
