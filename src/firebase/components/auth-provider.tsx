"use client";

import { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../server";

type AuthProviderContext = {
  user: User | null;
  status: "fetching" | "fetched" | "error";
};

const context = createContext<AuthProviderContext | undefined>({
  user: null,
  status: "fetching",
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stateUser, setStateUser] = useState<AuthProviderContext | undefined>();

  useEffect(() => {
    const stop = auth.onAuthStateChanged((user) => {
      setStateUser({ user, status: "fetched" });
    });
    return () => {
      stop();
    };
  }, []);

  return <context.Provider value={stateUser}>{children}</context.Provider>;
}

export const useSessionAuth = () => useContext(context);
