import Link from "next/link";
import { Hero } from "./(marketing)/_components/hero";
import Image from "next/image";
import Cards from "./(marketing)/_components/card";
import { Button } from "@/components/ui/button";
import Marketing from "./(marketing)/_components/marketing";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <Hero />
      <section className="text-white">
        <div className="mx-auto flex flex-col-reverse md:flex-col lg:flex-row xl:flex-row items-center my-12 md:mt-0 md:mb-[40px] ">
          <div className="flex-auto mt-10 md:mt-0">
            <Image
              className="rounded-xl ml-0 xl:ml-[60px] w-[384px] sm:max-w-sm md:w-[400px] xl:max-w-max md:mr-8  "
              src="https://source.unsplash.com/random/1200x820/?work"
              alt="gambar 3"
              width={460}
              height={460}
            />
          </div>
          <div className="flex-auto w-full lg:w-1/3 justify-center items-start mr-0 md:mt-10 ">
            <h1 className="text-xl md:text-3xl  tracking-loose">About Us</h1>
            <h2 className="text-3xl md:text-5xl text-teal-300 leading-relaxed md:leading-snug mb-2">
              Emnoer Cafe
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Emnoer Cafe is an Indonesian company engaged in serving food,
              drinks and snacks. snacks. We can make you feel the pleasure with
              the dishes we provide. Keep enjoying with us, as we continue to
              provide the best.
            </p>
            <Button
              variant="outline"
              asChild
              className="bg-primary text-primary-foreground gap-2 border-teal-300 hover:bg-teal-300 text-teal-300 py-2 px-4 w-36"
            >
              <Link href="/about">Who We Are</Link>
            </Button>
          </div>
        </div>
      </section>

      <Cards />

      <Marketing />
    </>
  );
}
