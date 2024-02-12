import Link from "next/link";

export default async function NotFound() {
  return (
    <div className=" flex flex-grow items-center justify-center mt-[80px]">
      <div className="r p-8 text-center ">
        <h1 className="mb-4 text-7xl font-bold text-emerald-500">404</h1>
        <p className="text-muted-foreground">
          Oops! The page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="mt-4 inline-block rounded bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-500"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
}
