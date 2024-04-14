"use client";

import Protected from "@/firebase/components/access/protected";
import { auth } from "@/firebase/server";
import { signOut } from "firebase/auth";

export default function Profile() {
  return (
    <Protected>
      <p className="text-center">You are logged in.</p>
      <div className="flex justify-center">
        <button
          onClick={() => {
            signOut(auth);
          }}
          className="rounded border border-black px-2 py-1 transition-colors hover:bg-black hover:text-white"
        >
          Sign out
        </button>
      </div>
    </Protected>
  );
}
