"use client";

import { Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type NavbarProps = {
    onCartClick?: () => void;
    searchTerm: string;
    onSearchChange: (value: string) => void;
};

const Navbar = ({ onCartClick, searchTerm, onSearchChange }: NavbarProps) => {
    return (
        <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-primary px-20 py-4">
            <div className="font-bold text-white">LOGO</div>
            <div className="relative flex w-80 rounded-md border border-indigo-400">
                <Search className="absolute left-2 top-[10px] size-4 text-white" />
                <Input
                    className="border-none pl-8 text-white placeholder:text-white"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            <Button
                type="button"
                variant="outline"
                className="gap-2 px-4"
                onClick={onCartClick}
            >
                <ShoppingCart className="size-4" />
                Cart
            </Button>
        </div>
    );
};

export default Navbar;
