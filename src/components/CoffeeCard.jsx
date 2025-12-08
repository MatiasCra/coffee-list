const formatRating = (rating) =>
    rating.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 1,
    });

export default function CoffeeCard(props) {
    const {
        title,
        price,
        imageSrc,
        imageAlt = "",
        imageAttrs,
        rating,
        votes,
        popular,
        available,
    } = props;

    return (
        <div class="bg-background-light dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
            <div class="relative">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    {...imageAttrs}
                    class="w-full h-48 object-cover"
                />
                {popular && (
                    <span class="absolute top-3 left-3 bg-yellow-300/80 text-yellow-900 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                        Popular
                    </span>
                )}
            </div>
            <div class="p-5">
                <div class="flex justify-between items-start">
                    <h3 class="font-bold text-lg text-gray-800 dark:text-white">
                        {title}
                    </h3>
                    <span class="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-semibold px-2.5 py-0.5 rounded-md">
                        {price}
                    </span>
                </div>
                {!available && <span class="text-red-400">Sold out</span>}
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <span
                        class={`material-icons ${rating ? "text-yellow-500" : ""} text-base!`}
                    >
                        star
                    </span>
                    {rating && (
                        <span class="ml-1 font-semibold">
                            {formatRating(rating)}
                        </span>
                    )}
                    <span class="ml-1">
                        {votes ? `(${votes} votes)` : "No votes"}
                    </span>
                </div>
            </div>
        </div>
    );
}
