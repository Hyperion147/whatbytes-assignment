import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "../ui/slider";

interface FilterSectionProps {
    className?: string;
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
    priceRange: [number, number];
    onPriceRangeChange: (value: [number, number]) => void;
    minPrice: number;
    maxPrice: number;
}

const formatPrice = (value: number) => `$${Math.round(value)}`;

const FilterSection = ({
    className,
    categories,
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
    minPrice,
    maxPrice,
}: FilterSectionProps) => {
    return (
        <div className={className}>
            <div className="sticky mx-8 flex flex-col gap-4 rounded-md bg-primary p-4 text-white">
                <div className="text-xl">Filter</div>
                <div>Category</div>
                <RadioGroup
                    value={selectedCategory}
                    onValueChange={onCategoryChange}
                >
                    {categories.map((category) => (
                        <div key={category} className="flex items-center gap-3">
                            <RadioGroupItem value={category} id={category} />
                            <Label htmlFor={category}>{category}</Label>
                        </div>
                    ))}
                </RadioGroup>
                <div className="space-y-2 mb-2">
                    <p>Price</p>
                    <Slider
                        value={priceRange}
                        onValueChange={(value) =>
                            onPriceRangeChange(value as [number, number])
                        }
                        min={minPrice}
                        max={maxPrice}
                        step={5}
                        className="mx-auto w-full max-w-xs"
                    />
                    <p className="flex w-full justify-between text-sm">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
