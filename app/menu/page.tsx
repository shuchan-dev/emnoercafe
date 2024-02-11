import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Menu = async () => {
  await sleep(1000);
  return (
    <>
      <h1 className="text-teal-300">Ini Halaman Menu</h1>
      <Link href="/">
        <Button variant="default" className="bg-violet-500 hover:bg-violet-700">
          Kembali
        </Button>
      </Link>
    </>
  );
};
export default Menu;
