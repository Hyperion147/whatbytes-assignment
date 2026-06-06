"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterSection from "./FilterSection";
import ProductSection from "./ProductSection";

import {
    allProducts,
    featuredProduct,
    products,
    parsePrice,
} from "@/lib/products";

type CatalogProps = {
    searchTerm: string;
};

const Catalog = ({ searchTerm }: CatalogProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const categories = [
        "All",
        ...new Set(allProducts.map((product) => product.category)),
    ];
    const minPriceDefault = 0;
    const maxPriceDefault = Math.ceil(
        Math.max(...allProducts.map((product) => parsePrice(product.price))),
    );

    const selectedCategory = searchParams.get("category") ?? "All";

    const minPrice = Number(searchParams.get("min") ?? minPriceDefault);
    const maxPrice = Number(searchParams.get("max") ?? maxPriceDefault);

    const [debouncePriceRange, setDebouncePriceRange] = useState<
        [number, number]
    >([minPrice, maxPrice]);

    useEffect(() => {
        setDebouncePriceRange([minPrice, maxPrice]);
    }, [minPrice, maxPrice]);

    const updateParams = (updates: Record<string, string | number | null>) => {
        const params = new URLSearchParams(searchParams.toString());

        for (const [key, value] of Object.entries(updates)) {
            if (value === null || value === "") {
                params.delete(key);
            } else {
                params.set(key, String(value));
            }
        }

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const filteredProducts = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return products.filter((product) => {
            const matchesCategory =
                selectedCategory === "All" ||
                product.category === selectedCategory;

            const productPrice = parsePrice(product.price);
            const matchesPrice =
                productPrice >= minPrice && productPrice <= maxPrice;
            const matchesSearch =
                normalizedSearch === "" ||
                product.title.toLowerCase().includes(normalizedSearch);

            return matchesCategory && matchesPrice && matchesSearch;
        });
    }, [selectedCategory, minPrice, maxPrice, searchTerm]);

    const showFeaturedProduct =
        selectedCategory === "All" ||
        (featuredProduct.category === selectedCategory &&
            parsePrice(featuredProduct.price) >= minPrice &&
            parsePrice(featuredProduct.price) <= maxPrice &&
            (searchTerm.trim() === "" ||
                featuredProduct.title
                    .toLowerCase()
                    .includes(searchTerm.trim().toLowerCase())));

    return (
        <div className="grid h-full min-h-0 w-full grid-cols-4 gap-6 overflow-hidden bg-blue-50 px-12 pb-54 pt-24">
            <FilterSection
                className="col-span-1 h-full"
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={(value) =>
                    updateParams({ category: value === "All" ? null : value })
                }
                priceRange={debouncePriceRange}
                onPriceRangeChange={setDebouncePriceRange}
                onPriceCommit={(range) => {
                    updateParams({min: range[0], max: range[1]});
                }}
                minPrice={minPriceDefault}
                maxPrice={maxPriceDefault}
            />

            <ProductSection
                className="col-span-3 h-full"
                products={filteredProducts}
                showFeaturedProduct={showFeaturedProduct}
            />
        </div>
    );
};

export default Catalog;
