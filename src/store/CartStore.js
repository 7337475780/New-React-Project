import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist((set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => {
        const existingProduct = state.cart.find((p) => p.id === product.id);
        return {
          cart: existingProduct
            ? state.cart.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
              )
            : [...state.cart, { ...product, quantity: 1 }],
        };
      }),
    removeFromCart: (productId) =>
      set((state) => ({
        cart: state.cart
          .map((product) =>
            product.id === productId
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      })),

    clearCart: () => set({ cart: [] }),

    updateQuantity: (id, amount) =>
      set((state) => ({
        cart: state.cart.map((product) =>
          product.id === id
            ? { ...product, quantity: Math.max(1, product.quantity + amount) }
            : product
        ),
      })),
    totalItems: () =>
      get().cart.reduce((sum, product) => sum + product.quantity, 0),
  })),

  { name: "local-storage" }
);
