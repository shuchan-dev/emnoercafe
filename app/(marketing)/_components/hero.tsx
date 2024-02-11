import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <section>
        <div className="bg-primary text-white">
          <div className="mx-auto flex flex-col md:flex-row items-center my-12 md:mt-[120px] md:mb-[100px] lg:mb-[160px]">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start ">
              <h1 className="text-3xl md:text-5xl text-teal-300 tracking-loose">
                Fresh Food
              </h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                START YOUR DAY WITH ENJOYMENT
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Explore our menu just click and book enjoy the comfort with us
                we continue to provide the best
              </p>
              <Button
                variant="outline"
                asChild
                className="bg-primary text-primary-foreground gap-2 border-teal-300 hover:bg-teal-300 text-teal-300 py-2 px-4 w-36"
              >
                <Link href="/menu">Explore Now</Link>
              </Button>
            </div>
            <div className="p-8 mt-[80px]  md:mb-0 md:mt-0 ml-0 md:ml-20 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div className="hidden lg:inline-block w-[200px] h-[350px] mt-20 -rotate-[25deg] ">
                  <Image
                    className="hidden xl:block object-cover rounded-full"
                    src="https://source.unsplash.com/random/760x1340/?drink"
                    alt="gambar 3"
                    width={1400}
                    height={760}
                  />
                </div>
                <div className="ml-0 md:ml-[60px] md:mt-[100px] xl:mt-0 w-[250px] h-[500px] mt-32 -rotate-0 xl:-rotate-[25deg]">
                  <Image
                    className="inline-block md:mt-0 xl:p-8 md:p-0 object-cover rounded-xl xl:rounded-full w-[760px] h-[300px] xl:w-max xl:h-max "
                    src="https://source.unsplash.com/random/760x1520/?chiken"
                    alt="gambar2"
                    width={1500}
                    height={760}
                  />
                </div>
                <div className="hidden xl:inline-block w-[150px] h-[250px] mt-10 ml-[20px] -rotate-[25deg]">
                  <Image
                    className="hidden lg:block object-cover rounded-full"
                    src="https://source.unsplash.com/random/760x1280/?cake"
                    alt="gambar"
                    width={1200}
                    height={760}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
