export interface Product {
  id: number;
  title: string;
  price: string;
  logo: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Shoes",
    price: "$129.99",
    logo: "/products/shoe.png",
    category: "Clothing",
    description:
      "Comfort-first everyday sneakers with a lightweight build and clean blue-accent styling.",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    title: "Headphones",
    price: "$89.99",
    logo: "/products/headphones.png",
    category: "Electronics",
    description:
      "Wireless over-ear headphones tuned for crisp sound, soft cushions, and long listening sessions.",
    rating: 4.5,
    reviews: 96,
  },
  {
    id: 3,
    title: "Bagpack",
    price: "$199.99",
    logo: "/products/bag.png",
    category: "Home",
    description:
      "A spacious everyday backpack with a structured silhouette and plenty of room for tech gear.",
    rating: 4.5,
    reviews: 74,
  },
  {
    id: 4,
    title: "Smart Watch",
    price: "$59.99",
    logo: "/products/watch.png",
    category: "Home",
    description:
      "A compact smartwatch with fitness tracking, notifications, and a polished modern finish.",
    rating: 4.5,
    reviews: 143,
  },
  {
    id: 5,
    title: "Sunglasses",
    price: "$49.99",
    logo: "/products/sunglasses.png",
    category: "Home",
    description:
      "A sharp, lightweight frame built for daily wear with a clean premium look.",
    rating: 4.5,
    reviews: 58,
  },
  {
    id: 6,
    title: "Camera",
    price: "$299.99",
    logo: "/products/camera.png",
    category: "Electronics",
    description:
      "A compact camera setup for everyday content, product shots, and travel photography.",
    rating: 4.5,
    reviews: 201,
  },
  {
    id: 7,
    title: "Shirt",
    price: "$79.99",
    logo: "/products/shirt.png",
    category: "Clothing",
    description:
      "A clean, comfortable shirt with a simple fit that matches the rest of the storefront palette.",
    rating: 4.5,
    reviews: 81,
  },
];

export const featuredProduct = {
  id: 100,
  title: "Smartphone",
  price: "$199",
  logo: "/products/phone.png",
  category: "Electronics",
  description:
    "A sleek smartphone designed to match the storefront's current visual language with a strong blue accent and a premium presentation.",
  rating: 4.5,
  reviews: 312,
};

export function parsePrice(price: string): number {
  const match = price.match(/[\d,]+(?:\.\d+)?/);
  if (!match) return 0;

  return Number(match[0].replace(/,/g, ""));
}

export const allProducts = [...products, featuredProduct]

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
