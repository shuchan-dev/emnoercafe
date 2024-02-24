import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="relative flex justify-center items-center mb-5">
      <Input
        type="text"
        placeholder="Search..."
        className="bg-primary px-12 w-[600px]"
      />
      <SearchIcon className="absolute left-3" />
    </div>
  );
};

export default Search;
