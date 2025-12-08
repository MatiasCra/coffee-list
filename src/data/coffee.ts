import Cappuccino from "../assets/images/cappuccino.png";
import HouseCoffee from "../assets/images/house-coffee.png";
import Espresso from "../assets/images/espresso.png";
import CoffeeLatte from "../assets/images/coffe-latte.png";
import ChocolateCoffee from "../assets/images/chocolate-coffee.png";
import ValentineCoffee from "../assets/images/valentine-coffee.png";

interface Coffee {
    title: string;
    desc: string;
    price: string;
    image: ImageMetadata;
    rating?: number;
    votes?: number;
    popular?: boolean;
    available: boolean;
}

const coffees: Coffee[] = [
    {
        title: "Cappuccino",
        desc: "A cappuccino with intricate latte art on a wooden table",
        price: "5.20",
        image: Cappuccino,
        rating: 4.7,
        votes: 85,
        popular: true,
        available: true,
    },
    {
        title: "House Coffee",
        desc: "A simple cup of black house coffee seen from above",
        price: "3.50",
        image: HouseCoffee,
        rating: 4.85,
        votes: 14,
        popular: true,
        available: true,
    },
    {
        title: "Espresso",
        desc: "A shot of espresso in a white cup, showing a rich crema",
        price: "4.10",
        image: Espresso,
        rating: 4.9,
        votes: 44,
        available: true,
    },
    {
        title: "Coffee Latte",
        desc: "A smooth and creamy coffee latte in a white mug",
        price: "4.50",
        image: CoffeeLatte,
        rating: 5,
        votes: 23,
        available: true,
    },
    {
        title: "Chocolate Coffee",
        desc: "A smooth and creamy coffee latte in a white mug",
        price: "4.00",
        image: ChocolateCoffee,
        rating: 4.65,
        votes: 122,
        available: false,
    },
    {
        title: "Valentine Coffee",
        desc: "A special Valentine-themed coffee with pink foam",
        price: "5.50",
        image: ValentineCoffee,
        available: true,
    },
];

export const getCoffees = () => {
    return coffees;
};
