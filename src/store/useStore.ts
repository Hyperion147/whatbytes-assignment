import { allProducts, type Product } from "@/lib/products";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = Product & {
    quantity: number;
};

type StoreState = {
    products: Product[];
    cartItems: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: number) => void;
    incrementQuantity: (productId: number) => void;
    decrementQuantity: (productId: number) => void;
    clearCart: () => void;
};

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            products: allProducts,
            cartItems: [],

            addToCart: (product, quantity = 1) =>
                set((state) => {
                    const existing = state.cartItems.find(
                        (item) => item.id === product.id,
                    );

                    if (existing) {
                        return {
                            cartItems: state.cartItems.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + quantity }
                                    : item,
                            ),
                        };
                    }

                    return {
                        cartItems: [
                            ...state.cartItems,
                            { ...product, quantity },
                        ],
                    };
                }),
            removeFromCart: (productId) =>
                set((state) => ({
                    cartItems: state.cartItems.filter(
                        (item) => item.id !== productId,
                    ),
                })),
            incrementQuantity: (productId) =>
                set((state) => ({
                    cartItems: state.cartItems.map((item) =>
                        item.id === productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item,
                    ),
                })),
            decrementQuantity: (productId) =>
                set((state) => ({
                    cartItems: state.cartItems
                        .map((item) =>
                            item.id === productId
                                ? { ...item, quantity: item.quantity - 1 }
                                : item,
                        )
                        .filter((item) => item.quantity > 0),
                })),
            clearCart: () => set({ cartItems: [] }),
        }),
        {
            name: "whatBytes-cart",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                cartItems: state.cartItems,
            }),
        },
    ),
);
