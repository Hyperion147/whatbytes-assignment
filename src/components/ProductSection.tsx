import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { featuredProduct, products } from "@/lib/products";

interface ProductSectionProps {
    className?: string;
}

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
        <div className={cn(className, "flex min-h-0 flex-col")}>
            <div className="text-2xl font-bold text-blue-950">
                Product Listing
            </div>
            <div className="mt-4 grid grid-cols-3 min-h-0 w-fit gap-4 overflow-y-auto rounded-md">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex h-fit flex-col items-start rounded-md bg-white p-2 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <Image
                            src={product.logo}
                            alt={product.title}
                            width={160}
                            height={160}
                            className="rounded-md size-40"
                        />
                        <p className="px-2">{product.title}</p>
                        <p className="px-2 text-sm font-bold">
                            {product.price}
                        </p>
                        <Button className="w-full" asChild>
                            <Link href={`/products/${product.id}`}>
                                View Product
                            </Link>
                        </Button>
                    </div>
                ))}
                <div className="flex items-start rounded-md col-span-2 bg-white transition hover:shadow-md">
                    <Image
                        src={featuredProduct.logo}
                        alt={featuredProduct.title}
                        width={320}
                        height={320}
                        className="rounded-md size-80"
                    />
                    <div className="space-y-2 flex flex-wrap flex-col">
                        <p className="py-2 text-xl font-bold text-blue-950">
                            {featuredProduct.title}
                        </p>
                        <RatingStars />
                        <p className="text-sm font-bold">{featuredProduct.price}</p>
                        <p className="pr-4 text-sm text-slate-600">
                            {featuredProduct.description}
                        </p>
                        <p className="text-sm font-medium text-slate-500">
                            Category
                        </p>
                        <p className="text-sm font-semibold text-blue-950">
                            {featuredProduct.category}
                        </p>
                        <Button asChild>
                            <Link href={`/products/${featuredProduct.id}`}>
                                View Product
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
