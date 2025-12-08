import StarSvg from "../assets/images/Star.svg";
import StarFillSvg from "../assets/images/Star_fill.svg";

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
        <div class="bg-darker rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300">
            <div class="relative">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    width={512}
                    height={365}
                    class="w-full object-cover"
                />
                {popular && (
                    <span class="absolute top-3 left-3 bg-star text-darker text-[0.625rem] font-semibold px-2.5 py-1 rounded-full">
                        Popular
                    </span>
                )}
            </div>
            <div class="py-3">
                <div class="flex justify-between items-start">
                    <h3 class="font-bold text-[1rem] text-lightest">{title}</h3>
                    <span class="bg-price text-darker text-[0.75rem] font-semibold px-2.5 py-0.5 rounded-md">
                        {price}
                    </span>
                </div>
                <div class="flex items-center text-sm text-lighter mt-2 justify-between align-middle">
                    <div class="flex justify-center items-center font-semibold">
                        {rating && (
                            <>
                                <img
                                    src={StarFillSvg.src}
                                    alt="filled yellow star"
                                    width={24}
                                    height={24}
                                    class="-mt-1"
                                />
                                <span class="ml-1 text-lightest">
                                    {formatRating(rating)}
                                </span>
                                <span class="ml-1">({votes} votes)</span>
                            </>
                        )}
                        {!rating && (
                            <>
                                <img
                                    src={StarSvg.src}
                                    alt="Outlined star"
                                    width={24}
                                    height={24}
                                />
                                <span class="ml-1">No votes</span>
                            </>
                        )}
                    </div>
                    {!available && <span class="text-sold-out">Sold out</span>}
                </div>
            </div>
        </div>
    );
}
