"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
    image: string;
    title: string;
};

export function ProductGallery({ image, title }: ProductGalleryProps) {
    const thumbnails = Array.from({ length: 4 }, (_, index) => ({
        id: index + 1,
        src: image,
    }));
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex w-full flex-col gap-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                    src={thumbnails[selectedIndex].src}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 sm:gap-3">
                {thumbnails.map((thumb, index) => {
                    const isSelected = index === selectedIndex;

                    return (
                        <button
                            key={thumb.id}
                            type="button"
                            onClick={() => setSelectedIndex(index)}
                            aria-label={`View ${title} image ${thumb.id}`}
                            className={cn(
                                "m-1 min-w-16 overflow-hidden rounded-xl bg-white p-1 shadow-sm transition sm:min-w-24",
                                isSelected
                                    ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white"
                                    : "border border-slate-200 hover:ring-1 hover:ring-blue-200",
                            )}
                        >
                            <Image
                                src={thumb.src}
                                alt={`${title} thumbnail ${thumb.id}`}
                                width={160}
                                height={160}
                                className="h-16 w-16 rounded-lg object-cover sm:h-20 sm:w-20"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
