"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/products/QuantitySelector";
import { useStore } from "@/store/useStore";
import type { Product } from "@/lib/products";

type ProductActionsProps = {
    product: Product;
};

export function ProductActions({ product }: ProductActionsProps) {
    const [quantity, setQuantity] = useState(1);
    const addToCart = useStore((state) => state.addToCart);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div className="space-y-4">
            <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
            />

            <Button className="w-full gap-2 py-6" onClick={handleAddToCart}>
                <ShoppingCart className="size-4" />
                Add to Cart
            </Button>
        </div>
    );
}
