import { Button } from "@/components/ui/button";
import { PencilLine, PlusIcon, Trash2 } from "lucide-react";
import Link from "next/link";

// export const CreateButton = () => {
//   return (
//     <Button variant="ghost" className="border-rose-600 border-2">
//       <PlusIcon className="mr-2" />
//       Create
//     </Button>
//   );
// };
export const EditButton = () => {
  return (
    <Link href="/dashboard/create">
      <Button
        variant="link"
        className=" text-primary-foreground border-2 hover:bg-green-400 hover:text-primary"
        size="icon"
      >
        <PencilLine />
      </Button>
    </Link>
  );
};
export const DelateButton = () => {
  return (
    <Button variant="destructive" className="hover:bg-rose-700" size="icon">
      <Trash2 />
    </Button>
  );
};
