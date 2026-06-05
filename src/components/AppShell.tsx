"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";

export function AppShell({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar onCartClick={() => setOpen(true)} />
            {children}
            <CartDrawer open={open} onClose={() => setOpen(false)} />
        </>
    );
}
