import CoffeeCard from "../components/CoffeeCard.jsx";
import { useState } from "preact/hooks";

const activeClasses = "bg-mid";
const inactiveClasses = "bg-transparent";

export default function Content({ allCoffees }) {
    const [coffees, setCoffees] = useState(allCoffees);
    const [onlyAvailable, setOnlyAvailable] = useState(false);

    const filterAvailable = () => {
        setCoffees(allCoffees.filter((coffee) => coffee.available === true));
        setOnlyAvailable(true);
    };
    const filterAll = () => {
        setCoffees(allCoffees);
        setOnlyAvailable(false);
    };

    return (
        <div>
            <div class="flex justify-center items-center gap-4 mt-6">
                <button
                    onClick={filterAll}
                    class={
                        (!onlyAvailable ? activeClasses : inactiveClasses) +
                        ` text-lightest hover:bg-lightest hover:text-darker font-semibold
                         text-[0.875rem] py-2 px-4 rounded-lg text-sm transition-colors cursor-pointer`
                    }
                >
                    All Products
                </button>
                <button
                    onClick={filterAvailable}
                    class={
                        (onlyAvailable ? activeClasses : inactiveClasses) +
                        ` text-lightest hover:bg-lightest hover:text-darker font-semibold
                        text-[0.875rem] py-2 px-4 rounded-lg text-smtransition-colors cursor-pointer`
                    }
                >
                    Available Now
                </button>
            </div>
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {coffees.map(
                    ({
                        name,
                        desc,
                        price,
                        imageSrc,
                        imageMetadata,
                        rating,
                        votes,
                        popular,
                        available,
                    }) => {
                        return (
                            <CoffeeCard
                                title={name}
                                price={price}
                                imageAlt={desc}
                                imageSrc={imageSrc}
                                imageAttrs={imageMetadata.attributes}
                                rating={rating}
                                votes={votes}
                                popular={popular}
                                available={available}
                            />
                        );
                    },
                )}
            </div>
        </div>
    );
}
