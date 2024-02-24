import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProducts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditButton, DelateButton } from "./actionButton";

export const DataTable = async () => {
  const products = await getProducts();

  return (
    <Table>
      <TableCaption>A list of Data</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-white bg-lime-600 text-center">
            No
          </TableHead>
          <TableHead className="text-white bg-amber-600 text-center">
            Product Name
          </TableHead>
          <TableHead className="text-white bg-rose-600 w-[400px] text-center">
            Desc
          </TableHead>
          <TableHead className="text-white bg-emerald-600 text-center">
            Category
          </TableHead>
          <TableHead className="text-white bg-violet-600 text-center w-[200px]">
            Price
          </TableHead>
          <TableHead className="text-white bg-cyan-600 text-center">
            Create At
          </TableHead>
          <TableHead className="text-white bg-blue-600 text-center">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <TableRow key={product.id}>
            <TableCell className="text-center ">{index + 1}</TableCell>
            <TableCell className="text-center ">
              {product.productName}
            </TableCell>
            <TableCell className="text-center ">{product.desc}</TableCell>
            <TableCell className="text-center ">{product.category}</TableCell>
            <TableCell className="text-center ">{product.price}</TableCell>
            <TableCell className="text-center ">
              {formatDate(product.createdAt.toString())}
            </TableCell>
            <TableCell className="text-center flex justify-center gap-2 ">
              <EditButton />
              <DelateButton />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
