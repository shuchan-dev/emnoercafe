import { getProductsById } from "@/lib/data";
import UpdateProduct from "../../(components)/updateProduct";
import { notFound } from "next/navigation";

const UpdateProducts = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const product = await getProductsById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-white text-2xl">Update Product</h1>
      <UpdateProduct product={product} />
    </div>
  );
};
export default UpdateProducts;
