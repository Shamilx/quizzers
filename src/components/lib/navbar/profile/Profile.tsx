import ProfileIcon from "@/components/lib/icons/profile/Profile";

// Next Link
import Link from "next/link";

function Profile() {
  return (
    <Link
      href={"/profile"}
      className="ms-3 cursor-pointer rounded-3xl border border-black p-1 transition-colors hover:bg-black hover:text-white"
    >
      <ProfileIcon />
    </Link>
  );
}

export default Profile;
