import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-5">
      <p className="text-center text-2xl font-bold">
        Sorry the Page you wanted is not found.
      </p>
      <Link
        href={"/"}
        className="rounded-lg border border-black bg-black px-2 py-1 text-center text-white transition-colors hover:bg-white hover:text-black"
      >
        Go to home page
      </Link>
    </div>
  );
}
