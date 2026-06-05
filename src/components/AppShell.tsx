"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import Catalog from "./home/Catalog";

export function AppShell({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <Navbar onCartClick={() => setOpen(true)}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <Catalog searchTerm={searchTerm} />
            {children}
            <CartDrawer open={open} onClose={() => setOpen(false)} />
        </>
    );
}
