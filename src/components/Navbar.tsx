"use client";

import { Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useStore } from "@/store/useStore";
import Link from "next/link";

type NavbarProps = {
    onCartClick?: () => void;
    searchTerm: string;
    onSearchChange: (value: string) => void;
};

const Navbar = ({ onCartClick, searchTerm, onSearchChange }: NavbarProps) => {
    const cartCount = useStore((state) =>
        state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
    );

    return (
        <div className="fixed top-0 z-50 w-full bg-primary px-4 py-3 sm:px-6 lg:px-20">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center justify-between md:block">
                    <Link href="/" className="font-bold text-white">
                        LOGO
                    </Link>

                    <Button
                        type="button"
                        variant="outline"
                        className="relative gap-2 px-4 md:hidden"
                        onClick={onCartClick}
                    >
                        <ShoppingCart className="size-4" />
                        Cart
                        {cartCount > 0 ? (
                            <span className="absolute -right-2 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full border border-blue-500 bg-white px-1 text-[10px] font-bold text-black">
                                {cartCount}
                            </span>
                        ) : null}
                    </Button>
                </div>

                <div className="relative w-full md:max-w-md md:flex-1">
                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white" />
                    <Input
                        className="h-10 w-full border-indigo-400 bg-transparent pl-9 text-white placeholder:text-white/80"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                <Button
                    type="button"
                    variant="outline"
                    className="relative hidden gap-2 px-4 md:flex"
                    onClick={onCartClick}
                >
                    <ShoppingCart className="size-4" />
                    Cart
                    {cartCount > 0 ? (
                        <span className="absolute -right-2 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full border border-blue-500 bg-white px-1 text-[10px] font-bold text-black">
                            {cartCount}
                        </span>
                    ) : null}
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
