"use client";
import { Input } from "@/components/ui/input";
import BadgeStar from "./badge";
import { Button } from "@/components/ui/button";
import { updateProduct } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "./actionButton";
import type { Product } from "@prisma/client";
import Link from "next/link";
import { toast } from "sonner";

const UpdateProduct = ({ product }: { product: Product }) => {
  const UpdateProductWhithById = updateProduct.bind(null, product.id);
  const [state, formAction] = useFormState(UpdateProductWhithById, null);

  return (
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
          defaultValue={product.productName}
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
          defaultValue={product.category}
        />
        <div id="category-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.category}</p>
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
          defaultValue={product.price}
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
          defaultValue={product.desc}
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
      <div className="flex justify-between gap-2">
        <Link href="/dashboard">
          <Button
            type="button"
            className="bg-violet-600 w-44 hover:bg-violet-900"
          >
            Close
          </Button>
        </Link>

        <SubmitButton label="update" />
      </div>
    </form>
  );
};

export default UpdateProduct;
