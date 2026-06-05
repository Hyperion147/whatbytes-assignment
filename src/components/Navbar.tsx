import { Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";

const Navbar = () => {
    return (
        <div className="bg-primary flex items-center justify-between px-20 py-4">
            <div className="font-bold text-white">LOGO</div>
            <div className="w-80 border border-indigo-400 rounded-md flex relative">
                <Search className="absolute top-[10px] left-2 size-4 text-white" />
                <Input
                    className="text-white pl-8 border-none placeholder:text-white"
                    placeholder="Search for products..."
                />
            </div>
            <div className="px-4 py-2 text-sm rounded-md bg-blue-950 text-white flex gap-2">
                <ShoppingCart className="size-4" />
                <span>Cart</span>
            </div>
        </div>
    );
};

export default Navbar;
