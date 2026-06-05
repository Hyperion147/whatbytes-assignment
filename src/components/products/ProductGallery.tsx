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
        <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
                <Image
                    src={thumbnails[selectedIndex].src}
                    alt={title}
                    width={900}
                    height={900}
                    className="h-full w-full object-cover"
                    priority
                />
            </div>

            <div className="flex gap-3 overflow-x-auto pb-1">
                {thumbnails.map((thumb, index) => {
                    const isSelected = index === selectedIndex;

                    return (
                        <button
                            key={thumb.id}
                            type="button"
                            onClick={() => setSelectedIndex(index)}
                            aria-label={`View ${title} image ${thumb.id}`}
                            className={cn(
                                "min-w-24 overflow-hidden rounded-xl bg-white p-1 m-1 shadow-sm transition",
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
                                className="h-20 w-20 rounded-lg object-cover"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
