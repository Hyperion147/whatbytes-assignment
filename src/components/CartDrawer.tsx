"use client";

import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";

type CartDrawerProps = {
    open: boolean;
    onClose: () => void;
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
    const cartItems = useStore((state) => state.cartItems);
    const incrementQuantity = useStore((state) => state.incrementQuantity);
    const decrementQuantity = useStore((state) => state.decrementQuantity);
    const removeFromCart = useStore((state) => state.removeFromCart);

    const subTotal = cartItems.reduce((sum, item) => {
        const price = Number(item.price.replace(/[^0-9.]/g, ""));
        return sum + price * item.quantity;
    }, 0);

    return (
        <>
            <Button
                type="button"
                aria-hidden={!open}
                tabIndex={open ? 0 : -1}
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-slate-950/30 transition-opacity ${
                    open ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
            />

            <aside
                className={`fixed right-0 top-0 z-50 h-screen w-full bg-white shadow-2xl transition-transform duration-300 lg:w-1/4 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-blue-50 p-2 text-blue-950">
                            <ShoppingCart className="size-4" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-blue-950">
                                Cart
                            </h2>
                            <p className="text-xs text-slate-500">
                                Your selected items
                            </p>
                        </div>
                    </div>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={onClose}
                        aria-label="Close cart"
                    >
                        <X className="size-4" />
                    </Button>
                </div>

                <div className="h-[calc(100vh-73px)] overflow-y-auto p-5">
                    <div className="space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="rounded-2xl border border-slate-200 bg-blue-50 p-4 text-sm text-slate-500">
                                Your cart is empty.
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-2xl border border-slate-200 bg-blue-50 p-4"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="font-semibold text-blue-950">
                                                {item.title}
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>
                                        <p className="text-sm font-bold text-slate-900">
                                            {item.price}
                                        </p>
                                    </div>
                                    <div className="flex mt-2 items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Button
                                                type="button"
                                                size="sm"
                                                variant="outline"
                                                onClick={() =>
                                                    decrementQuantity(item.id)
                                                }
                                            >
                                                <Minus className="size-4" />
                                            </Button>
                                            <Button
                                                type="button"
                                                size="sm"
                                                variant="outline"
                                                onClick={() =>
                                                    incrementQuantity(item.id)
                                                }
                                            >
                                                <Plus className="size-4" />
                                            </Button>
                                        </div>
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="destructive"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            <Trash2 className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-6 rounded-2xl bg-blue-950 p-4 text-white">
                        <p className="text-sm text-blue-100">Subtotal</p>
                        <p className="mt-1 text-2xl font-bold">
                            ${subTotal.toFixed()}
                        </p>
                        <Button className="mt-4 w-full bg-white text-blue-950 hover:bg-blue-50">
                            Checkout
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    );
}
