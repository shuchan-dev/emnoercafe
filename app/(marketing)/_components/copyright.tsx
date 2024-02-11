import Link from "next/link";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <p className="text-muted-foreground flex items-center justify-center text-sm mt-9">
        © {currentYear}.{" "}
        <span className="font-bold text-emerald-500">Emnoer Cafe</span>. All
        Reserved.
      </p>
      <p className="text-muted-foreground flex items-center justify-center text-xs">
        <a href="https://github.com/shuchan-dev" target="_blank">
          Created by : Emnoer Studio Code
        </a>
      </p>
    </>
  );
};

export default Copyright;
