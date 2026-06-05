"use client";

import {
    allProducts,
    featuredProduct,
    products,
    parsePrice,
} from "@/lib/products";
import { useMemo, useState } from "react";
import FilterSection from "./FilterSection";
import ProductSection from "./ProductSection";

const Catalog = () => {
    const categories = [
        "All",
        ...new Set(allProducts.map((product) => product.category)),
    ];
    const minPrice = 0;
    const maxPrice = Math.ceil(
        Math.max(...allProducts.map((product) => parsePrice(product.price))),
    );

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceRange, setPriceRange] = useState<[number, number]>([
        minPrice,
        maxPrice,
    ]);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                selectedCategory === "All" ||
                product.category === selectedCategory;

            const matchesPrice =
                parsePrice(product.price) >= priceRange[0] &&
                parsePrice(product.price) <= priceRange[1];

            return matchesCategory && matchesPrice;
        });
    }, [selectedCategory, priceRange]);

    const showFeaturedProduct =
        selectedCategory === "All" ||
        (featuredProduct.category === selectedCategory &&
            parsePrice(featuredProduct.price) >= priceRange[0] &&
            parsePrice(featuredProduct.price) <= priceRange[1]);

    return (
        <div className="grid h-full min-h-0 w-full grid-cols-4 gap-6 bg-blue-50 px-12 pb-54 pt-24">
            <FilterSection
                className="col-span-1"
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                minPrice={minPrice}
                maxPrice={maxPrice}
            />

            <ProductSection
                className="col-span-3"
                products={filteredProducts}
                showFeaturedProduct={showFeaturedProduct}
            />
        </div>
    );
};

export default Catalog;
