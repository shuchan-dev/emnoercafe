import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Banner = () => {
  return (
    <section className=" w-full h-96 my-10 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-indigo-700 from-5% via-sky-800 via-40% to-emerald-900 to-70%">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-primary-foreground text-4xl my-3 font-bold tracking-wide leading-loose">
          Subscribe to News or Promotions
        </h1>
        <p className="text-zinc-800 text-center mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
          molestias voluptas adipisci et neque commodi velit, laudantium fuga
          deleniti culpa necessitatibus aut, perferendis mollitia quaerat!
        </p>
      </div>
      <div className="flex items-center justify-center space-x-2 ">
        <Input
          type="email"
          placeholder="Email"
          className="bg-emerald-500 border-emerald-500 caret-violet-400 text-primary-foreground"
        />
        <Button
          type="submit"
          className="bg-teal-500 text-primary hover:bg-teal-700 hover:text-primary-foreground"
        >
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default Banner;
