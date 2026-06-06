"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar
                onCartClick={() => setOpen(true)}
                searchTerm=""
                onSearchChange={() => {}}
            />
            {children}
            <CartDrawer open={open} onClose={() => setOpen(false)} />
        </>
    );
}
