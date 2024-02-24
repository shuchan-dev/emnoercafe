import { Cookie, CupSoda, Utensils } from "lucide-react";
import Link from "next/link";

const Navigations = () => {
  return (
    <>
      <div className="flex justify-center mt-4 mb-2">
        <div className="text-white flex justify-between gap-4 rounded-lg bg-teal-700 px-5 w-1/2 py-3 ">
          <Link href="/menu">All</Link>
          <Link href="/menu/makanan" className="flex justify-between gap-2">
            <Utensils width={18} /> Makanan
          </Link>
          <Link href="/menu/minuman" className="flex justify-between gap-2">
            <CupSoda width={18} /> Minuman
          </Link>
          <Link href="/menu/cemilan" className="flex justify-between gap-2">
            <Cookie width={18} /> Cemilan
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navigations;
