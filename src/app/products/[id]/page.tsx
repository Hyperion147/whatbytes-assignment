import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/products/ProductGallery";
import { QuantitySelector } from "@/components/products/QuantitySelector";
import { cn } from "@/lib/utils";
import { featuredProduct, getProductById, products } from "@/lib/products";

const allProducts = [...products, featuredProduct];
const reviews = [
    {
        id: 1,
        name: "Aarav Mehta",
        role: "Verified Buyer",
        rating: 5,
        comment:
            "Really clean product page and the item looked exactly like the photos. Delivery was quick too.",
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Verified Buyer",
        rating: 5,
        comment:
            "Loved the blue-themed layout. The product details were easy to scan and the checkout flow felt smooth.",
    },
    {
        id: 3,
        name: "Kabir Singh",
        role: "Verified Buyer",
        rating: 4,
        comment:
            "Good quality and good presentation. The image carousel and rating section made the page feel premium.",
    },
    {
        id: 4,
        name: "Neha Kapoor",
        role: "Verified Buyer",
        rating: 5,
        comment:
            "The reviews section is a nice touch. It makes the whole product page feel more trustworthy and polished.",
    },
];

function RatingStars() {
    return (
        <div className="flex items-center gap-1">
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
}

function ReviewStars({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
                <Star
                    key={index}
                    className={cn(
                        "size-4",
                        index < rating
                            ? "fill-blue-500 text-blue-500"
                            : "text-slate-300",
                    )}
                />
            ))}
        </div>
    );
}

export function generateStaticParams() {
    return allProducts.map((product) => ({
        id: String(product.id),
    }));
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const productId = Number(id);
    const product =
        getProductById(productId) ??
        (featuredProduct.id === productId ? featuredProduct : null);

    if (!product) {
        notFound();
    }

    const relatedProducts = allProducts
        .filter((item) => item.id !== product.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-blue-50 px-6 pb-8 pt-24 text-slate-900 md:px-12">
            <div className="mx-auto max-w-7xl">
                <Button
                    asChild
                    variant="ghost"
                    className="mb-6 gap-2 text-blue-950"
                >
                    <Link href="/">
                        <ArrowLeft className="size-4" />
                        Back to products
                    </Link>
                </Button>

                <div className="">
                    <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 md:p-6">
                        <div className="grid gap-6 md:grid-cols-[1fr_1.05fr]">
                            <ProductGallery
                                image={product.logo}
                                title={product.title}
                            />

                            <div className="flex flex-col justify-between gap-5">
                                <div className="space-y-3">
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                                        {product.category}
                                    </p>
                                    <h1 className="text-3xl font-bold text-blue-950 md:text-4xl">
                                        {product.title}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <RatingStars />
                                        <span className="text-sm font-medium text-slate-500">
                                            {product.rating} rating
                                        </span>
                                        <span className="text-sm text-slate-400">
                                            {product.reviews} reviews
                                        </span>
                                    </div>
                                    <QuantitySelector />
                                    <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-blue-50 p-4">
                                    <p className="text-sm font-medium text-slate-500">
                                        Price
                                    </p>
                                    <p className="text-3xl font-bold text-blue-950">
                                        {product.price}
                                    </p>
                                </div>

                                <aside className="rounded-3xl bg-blue-950 p-6 text-white shadow-sm">
                                    <h2 className="text-xl font-bold">
                                        Product Highlights
                                    </h2>
                                    <div className="mt-5 space-y-3">
                                        {[
                                            "Clean, product-focused presentation",
                                            "Blue accent palette matches the current design",
                                            "Rounded cards with soft shadows for a modern storefront feel",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex gap-3 text-sm text-blue-50"
                                            >
                                                <Check className="mt-0.5 size-4 shrink-0 text-sky-300" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </aside>

                                <Button className="gap-2 py-6">
                                    <ShoppingCart className="size-4" />
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="mt-8">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-blue-950">
                            Customer Reviews
                        </h2>
                        <span className="text-sm font-medium text-slate-500">
                            4 reviews
                        </span>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-base font-semibold text-blue-950">
                                            {review.name}
                                        </p>
                                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                                            {review.role}
                                        </p>
                                    </div>
                                    <ReviewStars rating={review.rating} />
                                </div>
                                <p className="mt-4 text-sm leading-6 text-slate-600">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-8">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-blue-950">
                            Related Products
                        </h2>
                        <Button variant="outline">
                            <Link href="/" className="text-sm">
                                View all
                            </Link>
                        </Button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {relatedProducts.map((item) => (
                            <Link
                                key={item.id}
                                href={`/products/${item.id}`}
                                className={cn(
                                    "rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md",
                                )}
                            >
                                <Image
                                    src={item.logo}
                                    alt={item.title}
                                    width={640}
                                    height={480}
                                    className="h-48 w-full rounded-xl object-cover"
                                />
                                <div className="mt-3">
                                    <p className="text-lg font-semibold text-blue-950">
                                        {item.title}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {item.category}
                                    </p>
                                    <p className="mt-2 text-sm font-bold text-slate-900">
                                        {item.price}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
