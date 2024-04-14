import Back from "@/components/lib/icons/back/Back";
import Unprotected from "@/firebase/components/access/unprotected";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Unprotected>
      <Link href={"/"}>
        <Back className="absolute left-8 top-8 text-white" />
      </Link>
      <>{children}</>
    </Unprotected>
  );
}
