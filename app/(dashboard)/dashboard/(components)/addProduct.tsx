"use client";
import { Input } from "@/components/ui/input";
import BadgeStar from "./badge";
import { Button } from "@/components/ui/button";
import { addProduct } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { CreateButton } from "./actionButton";
import { PlusIcon } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";

const AddProduct = () => {
  const [state, formAction] = useFormState(addProduct, null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="border-rose-600 border-2">
          <PlusIcon className="mr-2" />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primary text-primary-foreground ">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form action={formAction} className="text-primary">
          <div className="mb-4">
            <div className="flex">
              <label htmlFor="product" className="text-primary-foreground">
                Product Name
              </label>
              <BadgeStar />
            </div>
            <Input
              required={true}
              type="text"
              name="productName"
              id="productName"
              placeholder="Product Name..."
            />
            <div id="product-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.Error?.productName}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex">
              <label htmlFor="category" className="text-primary-foreground">
                Category
              </label>
              <BadgeStar />
            </div>
            <Input
              required={true}
              type="text"
              name="category"
              id="category"
              placeholder="Category..."
            />
            <div id="category-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.Error?.category}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex">
              <label htmlFor="price" className="text-primary-foreground">
                Price
              </label>
              <BadgeStar />
            </div>
            <Input
              required={true}
              type="text"
              name="price"
              id="price"
              placeholder="Price..."
            />
            <div id="price-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.price}</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex">
              <label htmlFor="desc" className="text-primary-foreground">
                Description
              </label>
              <BadgeStar />
            </div>
            <Textarea
              placeholder="Description..."
              name="desc"
              id="desc"
              className="resize-none"
            />

            <div id="desc-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.desc}</p>
            </div>
          </div>
          {/* <div className="mb-4">
          <label htmlFor="image" className="text-primary-foreground">
            Image
          </label>
          <Input
            required={false}
            type="file"
            name="image"
            id="image"
            className="cursor-pointer"
          />
        </div> */}
          <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>

          <DialogFooter>
            <DialogClose>
              <Button className="bg-violet-600 w-44 hover:bg-violet-900">
                Close
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 w-full"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
