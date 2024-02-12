import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsRightIcon } from "lucide-react";

const Cards = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center mt-32 mb-10">
        <h1 className="text-3xl md:text-4xl text-teal-300 leading-relaxed md:leading-snug ">
          Food Menu
        </h1>
        <p className="text-sm text-muted-foreground ">Explor Our Best Menu</p>
      </div>
      {/* CARD */}
      <div className="flex flex-wrap items-center justify-center gap-2 xl:gap-4">
        <div className="flex-shrink-0 my-3 relative overflow-hidden bg-emerald-600 rounded-lg w-36 h-60 xs:w-44 sm:w-56 sm:h-80 xl:w-[300px] xl:h-[380px] shadow-lg">
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
              Indoor
            </span>
            <div className="flex flex-wrap gap-2 xl:justify-between">
              <span className="block font-semibold text-lg sm:text-2xl">
                Peace Lily
              </span>
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger className="bg-primary rounded-full text-primary-foreground text-xs font-bold px-3 py-2 leading-none flex items-center">
                    Rp.79.900
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary text-primary-foreground">
                    <p>Add to Cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 my-3 relative overflow-hidden bg-violet-500 rounded-lg w-36 h-60 xs:w-44 shadow-lg sm:w-56 sm:h-80 xl:w-[300px] xl:h-[380px]">
          <div className="relative flex px-1 pt-1  items-center justify-center">
            <Image
              className="relative w-60 h-36 rounded-lg sm:h-52 sm:mb-5 xl:h-64 xl:w-72"
              src="https://source.unsplash.com/random/?takoyaki"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="relative text-white px-2 ">
            <span className="block opacity-75 -mb-1 text-sm sm:text-lg">
              Indoor
            </span>
            <div className="flex flex-wrap gap-2 xl:justify-between">
              <span className="block font-semibold text-lg sm:text-2xl ">
                Peace Lily
              </span>
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger className="bg-primary rounded-full text-primary-foreground text-xs font-bold px-3 py-2 leading-none flex items-center">
                    Rp.99.900
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary text-primary-foreground">
                    <p>Add to Cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 my-3 relative overflow-hidden bg-purple-500 rounded-lg w-36 xs:w-44 h-60 shadow-lg sm:w-56 sm:h-80 xl:w-[300px] xl:h-[380px]">
          <div className="relative flex px-1 pt-1  items-center justify-center">
            <Image
              className="relative w-60 h-36 rounded-lg sm:h-52 sm:mb-5 xl:h-64 xl:w-72"
              src="https://source.unsplash.com/random/?lemon"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="relative text-white px-2 ">
            <span className="block opacity-75 -mb-1 text-sm  sm:text-lg ">
              Indoor
            </span>
            <div className="flex flex-wrap gap-2 xl:justify-between">
              <span className="block font-semibold text-lg sm:text-2xl ">
                Peace Lily
              </span>
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger className="bg-primary rounded-full text-primary-foreground text-xs font-bold px-3 py-2 leading-none flex items-center">
                    Rp.69.900
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary text-primary-foreground">
                    <p>Add to Cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 my-3 relative overflow-hidden bg-teal-500 rounded-lg w-36 xs:w-44 h-60 sm:w-56 sm:h-80 shadow-lg xl:w-[300px] xl:h-[380px]">
          <div className="relative flex px-1 pt-1  items-center justify-center">
            <Image
              className="relative w-60 h-36 rounded-lg sm:h-52 sm:mb-5 xl:h-64 xl:w-72"
              src="https://source.unsplash.com/random/?pizza"
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="relative text-white px-2 ">
            <span className="block opacity-75 -mb-1 text-sm sm:text-lg">
              Indoor
            </span>
            <div className="flex flex-wrap gap-2 xl:justify-between">
              <span className="block font-semibold text-lg sm:text-2xl ">
                Peace Lily
              </span>
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger className="bg-primary rounded-full text-primary-foreground text-xs font-bold px-3 py-2 leading-none flex items-center">
                    Rp.49.900
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary text-primary-foreground">
                    <p>Add to Cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <Button
          variant="outline"
          asChild
          className="bg-primary text-primary-foreground gap-2 border-teal-300 hover:bg-teal-300 text-teal-300"
        >
          <Link href="/menu">
            See All <ChevronsRightIcon />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Cards;
