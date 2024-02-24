import AddProduct from "./(components)/addProduct";
import Search from "./(components)/search";
import { DataTable } from "./(components)/table";

function page() {
  return (
    <div className="text-white">
      <div className="flex justify-center gap-5">
        <Search />
        <AddProduct />
      </div>
      <DataTable />
    </div>
  );
}

export default page;
