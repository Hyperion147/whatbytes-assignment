import { Star } from "lucide-react";
import { Button } from "./ui/button";

interface ProductSectionProps {
    className?: string;
}

const products = [
    {
        id: 1,
        logo: "/products/shoe.png",
        title: "Shoes",
        price: "$129.99",
    },
    {
        id: 2,
        logo: "/products/headphones.png",
        title: "Headphones",
        price: "$89.99",
    },
    {
        id: 3,
        logo: "/products/bag.png",
        title: "Bagpack",
        price: "$199.99",
    },
    {
        id: 4,
        logo: "/products/watch.png",
        title: "Smart Watch",
        price: "$59.99",
    },
    {
        id: 5,
        logo: "/products/sunglasses.png",
        title: "Sunglasses",
        price: "$49.99",
    },
    {
        id: 6,
        logo: "/products/camera.png",
        title: "Camera",
        price: "$299.99",
    },
    {
        id: 7,
        logo: "/products/shirt.png",
        title: "Shirt",
        price: "$79.99",
    },
];

const RatingStars = () => {
    return (
        <div className="flex items-center gap-1 px-2">
            {Array.from({ length: 4 }).map((_, index) => (
                <Star
                    key={index}
                    className="size-4 fill-blue-500 text-blue-500"
                />
            ))}
            <div className="relative size-4">
                <Star className="absolute inset-0 size-4 text-blue-500/30" />
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                    <Star className="size-4 fill-blue-500 text-blue-500" />
                </div>
            </div>
        </div>
    );
};

const ProductSection = ({ className }: ProductSectionProps) => {
    return (
        <div className={`${className} flex min-h-0 flex-col`}>
            <div className="text-2xl font-bold text-blue-950">
                Product Listing
            </div>
            <div className="mt-4 grid grid-cols-3 min-h-0 w-fit gap-4 overflow-y-auto rounded-md">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="p-2 flex h-fit flex-col items-start bg-white rounded-md"
                    >
                        <img
                            src={product.logo}
                            alt={product.title}
                            className="rounded-md size-40"
                        />
                        <p className="px-2">{product.title}</p>
                        <p className="px-2 text-sm font-bold">
                            {product.price}
                        </p>
                        <Button className="w-full">Add to Card</Button>
                    </div>
                ))}
                <div className="flex items-start bg-white rounded-md col-span-2">
                    <img
                        src="/products/phone.png"
                        alt="phone"
                        className="rounded-md size-80"
                    />
                    <div className="space-y-2 flex flex-wrap flex-col">
                        <p className="py-2 text-xl font-bold text-blue-950">
                            Smartphone
                        </p>
                        <RatingStars />
                        <p className="text-sm font-bold">$199</p>
                        <p >Lorem ipsum dolor sit amet.</p>
                        <p>Category</p>
                        <p>Electronics</p>
                        <Button>
                            Add to Card
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
