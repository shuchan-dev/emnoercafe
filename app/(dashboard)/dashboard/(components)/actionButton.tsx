"use client";
import { Button } from "@/components/ui/button";
import { delateContact } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  console.log("🚀 ~ SubmitButton ~ pending:", pending);

  return (
    <Button
      type="submit"
      className={cn("bg-emerald-600 w-44 hover:bg-emerald-700 w", {
        "opacity-5 cursor-progress": pending,
      })}
      disabled={pending}
    >
      {label == "save" ? (
        <span>{pending ? "Saving.." : "Save"}</span>
      ) : (
        <span>{pending ? "Upadating.." : "Update"}</span>
      )}
    </Button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`dashboard/edit/${id}`}>
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
export const DelateButton = ({ id }: { id: string }) => {
  const DelateButtonById = delateContact.bind(null, id);
  const handleDelete = () => {
    toast.promise(DelateButtonById, {
      loading: "Loading delate.....",
      success: "Product Delete Success",
      error: "Failde to delate product",
    });
  };

  return (
    <form action={handleDelete}>
      <Button variant="destructive" className="hover:bg-rose-700" size="icon">
        <Trash2 />
      </Button>
    </form>
  );
};
