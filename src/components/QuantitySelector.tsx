"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500">Qty</span>
            <div className="flex items-center rounded-md border border-slate-200 bg-white shadow-sm">
                <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-none rounded-l-md"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
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
                    onClick={() => setQuantity((current) => current + 1)}
                    aria-label="Increase quantity"
                >
                    <Plus className="size-4" />
                </Button>
            </div>
        </div>
    );
}
