"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "../ui/slider";

interface FilterSectionProps {
    className?: string;
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
    priceRange: [number, number];
    onPriceRangeChange: (value: [number, number]) => void;
    onPriceCommit: (value: [number, number]) => void;
    minPrice: number;
    maxPrice: number;
}

const formatPrice = (value: number) => `$${Math.round(value)}`;

function FilterControls({
    categories,
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
    onPriceCommit,
    minPrice,
    maxPrice,
}: FilterSectionProps) {
    return (
        <>
            <div className="text-xl font-semibold">Filter</div>

            <div className="space-y-3">
                <div className="text-sm font-medium uppercase tracking-wide text-white/80">
                    Category
                </div>
                <RadioGroup
                    value={selectedCategory}
                    onValueChange={onCategoryChange}
                    className="gap-2"
                >
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="flex items-center gap-3 rounded-md bg-white/5 px-3 py-2"
                        >
                            <RadioGroupItem value={category} id={category} />
                            <Label htmlFor={category}>{category}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            <div className="space-y-3">
                <div className="text-sm font-medium uppercase tracking-wide text-white/80">
                    Price
                </div>
                <Slider
                    value={priceRange}
                    onValueChange={(value) =>
                        onPriceRangeChange(value as [number, number])
                    }
                    onValueCommit={(value) =>
                        onPriceCommit(value as [number, number])
                    }
                    min={minPrice}
                    max={maxPrice}
                    step={5}
                    className="mx-auto w-full max-w-xs"
                />
                <p className="flex w-full justify-between text-sm text-white/90">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                </p>
            </div>
        </>
    );
}

const FilterSection = (props: FilterSectionProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={props.className}>
            <div className="hidden lg:block">
                <div className="sticky top-24 flex max-h-[calc(100vh-8rem)] w-full flex-col gap-4 overflow-y-auto rounded-md bg-primary p-4 text-white">
                    <FilterControls {...props} />
                </div>
            </div>

            <div className="lg:hidden">
                <Collapsible open={open} onOpenChange={setOpen}>
                    <div className="mx-4">
                        <CollapsibleTrigger asChild>
                            <Button
                                type="button"
                                variant="outline"
                                className="flex w-full items-center justify-between border-primary/20 bg-white text-blue-950"
                            >
                                <span>Filters</span>
                                <ChevronDown
                                    className={`size-4 transition-transform ${
                                        open ? "rotate-180" : ""
                                    }`}
                                />
                            </Button>
                        </CollapsibleTrigger>
                    </div>

                    <CollapsibleContent className="px-4 pt-3">
                        <div className="flex flex-col gap-4 rounded-md bg-primary p-4 text-white">
                            <FilterControls {...props} />
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </div>
    );
};

export default FilterSection;
