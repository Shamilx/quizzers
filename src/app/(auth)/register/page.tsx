import Form from "@/firebase/components/register/form";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-black">
      <Form>
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-bold uppercase text-zinc-400">Register</p>
          <input
            name="email"
            type="email"
            required
            placeholder="example@gmail.com"
            className="rounded border border-white px-2 py-2 outline-none"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="*********"
            className="rounded border border-white px-2 py-2 outline-none"
          />
          <button className="w-full rounded border border-white py-2 text-white transition-colors hover:bg-white hover:text-black">
            Submit
          </button>
          <Link
            href={"/signin"}
            className="w-full rounded border border-white py-2 text-center text-white transition-colors hover:bg-white hover:text-black"
          >
            Sign in
          </Link>
        </div>
      </Form>
    </div>
  );
}
