"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import Catalog from "@/components/home/Catalog";
import Footer from "@/components/Footer";

const page = () => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="relative overflow-hidden">
            <Navbar
                onCartClick={() => setOpen(true)}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <Catalog searchTerm={searchTerm} />
            <Footer />
            <CartDrawer open={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export default page;
