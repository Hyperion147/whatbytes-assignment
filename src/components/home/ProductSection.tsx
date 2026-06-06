import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { featuredProduct, type Product } from "@/lib/products";
import { useStore } from "@/store/useStore";
interface ProductSectionProps {
    className?: string;
    products?: Product[];
    showFeaturedProduct: boolean;
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

const ProductSection = ({
    className,
    products = [],
    showFeaturedProduct = true,
}: ProductSectionProps) => {
    const addToCart = useStore((state) => state.addToCart);

    return (
        <div className={cn(className, "flex min-h-0 flex-col")}>
            <div className="px-1 text-xl font-bold text-blue-950 sm:text-2xl">
                Product Listing
            </div>
            <div className="mt-4 grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-y-auto rounded-md pr-1 sm:grid-cols-2 lg:grid-cols-3 lg:pr-2">
                {products.length === 0 ? (
                    <div className="col-span-full rounded-md bg-white p-6 text-sm text-slate-500">
                        No products match your filters.
                    </div>
                ) : (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="flex h-fit flex-col items-start rounded-md bg-white p-2 transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <Image
                                src={product.logo}
                                alt={product.title}
                                width={160}
                                height={160}
                                className="h-36 w-full rounded-md object-contain sm:h-40"
                            />
                            <p className="px-2 pt-2">{product.title}</p>
                            <p className="px-2 text-sm font-bold">
                                {product.price}
                            </p>
                            <div className="flex w-full flex-col gap-2 pt-2 sm:flex-row">
                                <Button className="w-full md:w-fit" asChild>
                                    <Link href={`/products/${product.id}`}>
                                        View Product
                                    </Link>
                                </Button>
                                <Button
                                    className="w-full md:w-fit"
                                    variant="outline"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))
                )}
                {showFeaturedProduct ? (
                    <div className="col-span-full flex flex-col items-start overflow-hidden rounded-md bg-white transition hover:shadow-md lg:col-span-2 lg:flex-row">
                        <Image
                            src={featuredProduct.logo}
                            alt={featuredProduct.title}
                            width={320}
                            height={320}
                            className="h-52 w-full rounded-md object-contain sm:h-64 lg:h-80 lg:w-80"
                        />
                        <div className="flex flex-col space-y-2 p-4">
                            <p className="pt-1 text-xl font-bold text-blue-950">
                                {featuredProduct.title}
                            </p>
                            <RatingStars />
                            <p className="text-sm font-bold">
                                {featuredProduct.price}
                            </p>
                            <p className="pr-4 text-sm text-slate-600">
                                {featuredProduct.description}
                            </p>
                            <p className="text-sm font-medium text-slate-500">
                                Category
                            </p>
                            <p className="text-sm font-semibold text-blue-950">
                                {featuredProduct.category}
                            </p>
                            <Button className="w-full sm:w-auto" asChild>
                                <Link href={`/products/${featuredProduct.id}`}>
                                    View Product
                                </Link>
                            </Button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ProductSection;
