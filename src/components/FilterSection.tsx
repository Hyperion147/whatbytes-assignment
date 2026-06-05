import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "./ui/slider";

interface FilterSectionProps {
    className?: string;
}

const FilterSection = ({ className }: FilterSectionProps) => {
    return (
        <div className={className}>
            <div className="sticky mx-8 flex flex-col gap-4 rounded-md bg-primary p-4 text-white">
                <div className="text-xl">Filter</div>
                <div>Category</div>
                <RadioGroup defaultValue="option-one">
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="All" id="All" />
                        <Label htmlFor="All">All</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="Electronics" id="Electronics" />
                        <Label htmlFor="Electronics">Electronics</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="Clothing" id="Clothing" />
                        <Label htmlFor="Clothing">Clothing</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="Home" id="Home" />
                        <Label htmlFor="Home">Home</Label>
                    </div>
                </RadioGroup>
                <div className="space-y-2 mb-2">
                    <p>Price</p>
                    <Slider
                        defaultValue={[0, 100]}
                        max={100}
                        step={5}
                        className="mx-auto w-full max-w-xs"
                    />
                    <p className="flex w-full justify-between text-sm">
                        <span>0</span>
                        <span>1000</span>
                    </p>
                </div>
            </div>
            {/* Did not add the extra category and price components cause of repetition */}
            {/* <div className="my-8 bg-white rounded-md p-4">
              <p>Price</p>
              
            </div> */}
        </div>
    );
};

export default FilterSection;
