"use client";

import { useEffect, useRef } from "react";
import Menu from "../icons/menu/Menu";
import Back from "../icons/back/Back";
import { usePathname } from "next/navigation";

export default function QuizzersMobileNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    divRef.current?.classList.add("hidden");
  }, [pathName]);

  return (
    <div className="ms-auto flex md:hidden">
      <button
        onClick={() => {
          divRef.current?.classList.remove("hidden");
        }}
      >
        <Menu />
      </button>

      <div
        className="absolute left-0 top-0 hidden h-[100vh] w-[100vw] bg-black"
        ref={divRef}
      >
        <button
          onClick={() => {
            divRef.current?.classList.add("hidden");
          }}
          className="absolute left-8 top-8"
        >
          <Back className="text-white" />
        </button>

        <div className="flex h-full items-center justify-center text-3xl uppercase text-white">
          <div className="flex flex-col gap-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
