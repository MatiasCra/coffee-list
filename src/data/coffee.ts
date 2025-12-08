import { getImage } from "astro:assets";

interface CoffeeData {
    id: number;
    name: string;
    image: string;
    price: string;
    rating: number | null;
    votes: number;
    popular: boolean;
    available: boolean;
}

export interface Coffee {
    name: string;
    desc: string;
    price: string;
    imageSrc: string;
    imageMetadata: ImageMetadata;
    rating: number | null;
    votes: number;
    popular: boolean;
    available: boolean;
}

const coffeeOptimizedImage = async (image: string) => {
    return await getImage({
        src: image,
        format: "webp",
        width: 512,
        height: 512,
    });
};

export const getCoffees = async () => {
    const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json",
    );
    const data = await response.json();
    return data.map(
        ({
            name,
            image,
            price,
            rating,
            votes,
            popular,
            available,
        }: CoffeeData) => {
            return {
                name,
                desc: name,
                price,
                imageSrc: image,
                imageMetadata: coffeeOptimizedImage(image),
                rating,
                votes,
                popular,
                available,
            };
        },
    );
};
