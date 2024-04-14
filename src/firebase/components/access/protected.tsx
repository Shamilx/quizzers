"use client";

import { useRouter } from "next/navigation";
import { useSessionAuth } from "../auth-provider";
import { useEffect } from "react";

export default function Protected({ children }: { children: React.ReactNode }) {
  const session = useSessionAuth();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "fetched") {
      if (!session.user) {
        router.replace("/signin");
      }
    }
  }, [session]);

  if (session?.status === "fetched") if (session.user) return children;
}
