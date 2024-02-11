import Loader from "@/components/spinner";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex items-center justify-center mt-40">
      <Loader />
    </div>
  );
}
