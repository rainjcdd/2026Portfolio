import Image from "next/image";

const categories = [
  ["past-purchases", "Past Purchases", "Past Purchases"],
  ["for-you", "For You", "For You"],
  ["new-arrivals", "New", "New Arrivals"],
  ["produce", "Produce", "Produce"],
  ["meat", "Meat", "Meat"],
  ["seafood", "Seafood", "Seafood"],
  ["deli", "Deli", "Deli"],
  ["dairy", "Dairy", "Dairy & Eggs"],
  ["beverages", "Beverages", "Beverages"],
  ["bakery", "Bakery", "Bread & Bakery"],
  ["frozen", "Frozen", "Frozen"],
  ["grains", "Grains", "Rice, Pasta & Beans"],
  ["baking", "Baking", "Baking & Cooking"],
  ["condiments", "Condiments", "Condiments & Sauces"],
  ["canned", "Canned", "Soup & Canned Goods"],
  ["breakfast", "Breakfast", "Breakfast"],
  ["snacks", "Snacks", "Snacks"],
  ["candy", "Candy", "Candy & Chocolate"],
  ["home-office", "Home & Office", "Home & Office"],
  ["health-beauty", "Health & Beauty", "Health & Beauty"],
];

export function BrandIconography({ brand }: { brand: "stop-and-shop" | "food-lion" }) {
  const isFoodLion = brand === "food-lion";
  return (
    <figure aria-label={`${isFoodLion ? "Food Lion" : "Stop & Shop"} category iconography`} className="mx-auto w-full max-w-[1120px] bg-white px-4 py-6 sm:px-8 sm:py-10">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-5 lg:gap-y-10">
        {categories.map(([key, stopShopLabel, foodLionLabel]) => (
          <li key={key} className="flex min-h-[104px] flex-col items-center gap-3 text-center">
            <div className="flex h-16 items-center justify-center">
              <Image
                src={`/images/projects/navigation-redesign/${brand}-icons/normalized/${key}.svg`}
                alt=""
                width={64}
                height={64}
                unoptimized
                className="h-16 w-16 object-contain"
              />
            </div>
            <span className="min-h-[2.75em] w-full max-w-[15ch] text-center text-[12px] leading-snug text-[#002c2b] sm:text-[13px]">
              {isFoodLion ? foodLionLabel : stopShopLabel}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
