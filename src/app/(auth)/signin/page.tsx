import Form from "@/firebase/components/sign-in/form";
import Link from "next/link";

function SignIn() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-black">
      <Form>
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-bold uppercase text-zinc-400">Log in</p>
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
            Log in
          </button>
          <Link
            href={"/register"}
            className="w-full rounded border border-white py-2 text-center text-white transition-colors hover:bg-white hover:text-black"
          >
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;
