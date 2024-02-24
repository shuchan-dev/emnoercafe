import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getProducts } from "@/lib/data";

const Cards = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 xl:gap-1">
      {products.map((product) => (
        <div
          className="m-2 flex-shrink-0 my-3 relative overflow-hidden bg-emerald-600 rounded-lg w-36 h-60 xs:w-44 sm:w-56 sm:h-80 xl:w-[280px] xl:h-[380px] shadow-lg"
          key={product.id}
        >
          <div className="relative flex px-1 pt-1  items-center justify-center">
            <Image
              className="relative w-60 h-36 sm:h-52 sm:mb-5 rounded-lg xl:h-64 xl:w-72"
              src="https://source.unsplash.com/random/?sushi"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="relative text-white px-2 ">
            <span className="block opacity-75 -mb-1 text-sm sm:text-lg">
              {product.category}
            </span>
            <div className="flex flex-wrap gap-2 xl:justify-between">
              <span className="block font-semibold text-lg sm:text-2xl">
                {product.productName}
              </span>
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger className="bg-primary rounded-full text-primary-foreground text-xs font-bold px-3 py-2 leading-none flex items-center">
                    {product.price}
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary text-primary-foreground">
                    <p>Add to Cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
