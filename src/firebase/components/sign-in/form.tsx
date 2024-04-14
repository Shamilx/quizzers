"use client";

import { auth } from "@/firebase/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Form({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [error, setError] = useState();
  const errorRef = useRef<HTMLParagraphElement>(null);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const email = form.get("email");
        const password = form.get("password");

        try {
          const user = await signInWithEmailAndPassword(
            auth,
            email as string,
            password as string,
          );

          if (user.user) {
            router.replace("/profile");
          }
        } catch (err: any) {
          errorRef.current?.classList.remove("hidden");
          setError(err.message);
        }
      }}
    >
      {children}
      <p
        className="mt-3 hidden max-w-[230px] rounded-lg bg-red-700 p-3 text-center text-white"
        ref={errorRef}
      >
        {error}
      </p>
    </form>
  );
}
