"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type QuantitySelectorProps = {
    quantity: number;
    onQuantityChange: (quantity: number) => void;
};

export function QuantitySelector({
    quantity,
    onQuantityChange,
}: QuantitySelectorProps) {
    const decrement = () => onQuantityChange(Math.max(1, quantity - 1));
    const increment = () => onQuantityChange(quantity + 1);

    return (
        <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-slate-500">Qty</span>
            <div className="flex items-center rounded-md border border-slate-200 bg-white shadow-sm">
                <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-none rounded-l-md"
                    onClick={decrement}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                >
                    <Minus className="size-4" />
                </Button>

                <span className="min-w-12 px-3 text-center text-sm font-semibold text-blue-950">
                    {quantity}
                </span>

                <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-none rounded-r-md"
                    onClick={increment}
                    aria-label="Increase quantity"
                >
                    <Plus className="size-4" />
                </Button>
            </div>
        </div>
    );
}
