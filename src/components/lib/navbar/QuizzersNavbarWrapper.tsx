"use client";

import { usePathname } from "next/navigation";

function QuizzersNavbarWrapper({ children }: { children: React.ReactNode }) {
  // Define where you want to hide Navbar.
  const hideNavIn = ["/signin", "/register"];

  const pathName = usePathname();
  const isShowing = !hideNavIn.includes(pathName);

  return isShowing && <>{children}</>;
}

export default QuizzersNavbarWrapper;
