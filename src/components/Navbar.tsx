import { Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full bg-primary flex items-center justify-between px-20 py-4">
            <div className="font-bold text-white">LOGO</div>
            <div className="w-80 border border-indigo-400 rounded-md flex relative">
                <Search className="absolute top-[10px] left-2 size-4 text-white" />
                <Input
                    className="text-white pl-8 border-none placeholder:text-white"
                    placeholder="Search for products..."
                />
            </div>
            <Button asChild variant="outline" className="gap-2 px-4">
                <div>
                    <ShoppingCart className="size-4" />
                    Cart
                </div>
            </Button>
        </div>
    );
};

export default Navbar;
