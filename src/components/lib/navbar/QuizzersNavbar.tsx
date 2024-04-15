import Link from "next/link";

// Components
import Line from "@/components/lib/icons/line/Line";
import Profile from "@/components/lib/navbar/profile/Profile";
import QuizzersNavbarWrapper from "@/components/lib/navbar/QuizzersNavbarWrapper";
import QuizzersMobileNavbar from "./QuizzersMobileNavbar";

function QuizzersNavbar() {
  return (
    <QuizzersNavbarWrapper>
      <div className="pt-5">
      <nav className="mx-5 flex min-w-[150px] items-center rounded-2xl border-[0.5px] border-black px-2 py-1 shadow shadow-zinc-200">
        <p className="text-xl font-bold">Quizzers</p>

        <div className="ms-auto hidden items-center md:flex">
          <Line classname="mr-4 hidden lg:block" />

          <ul className="flex w-[400px] justify-around text-[16px] font-medium uppercase">
            <li>
              <Link
                href={"/"}
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Quizzes
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="transition-colors duration-200 hover:text-blue-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Line classname="ms-4 hidden lg:block" />

          <Profile />

          <button className="ml-4 rounded-[20px] border border-black bg-black px-4 py-1 uppercase text-white transition-colors duration-200 hover:bg-white hover:text-black">
            Explore
          </button>
        </div>

        <QuizzersMobileNavbar>
          <Link href={"/"} className="">
            Home
          </Link>
          <Link href={"/"} className="">
            Quizzes
          </Link>
          <Link href={"/"} className="">
            About Us
          </Link>
          <Link href={"/"} className="">
            Contact
          </Link>
          <Link href={"/profile"} className="">
            Profile
          </Link>
        </QuizzersMobileNavbar>
      </nav>
      </div>
    </QuizzersNavbarWrapper>
  );
}

export default QuizzersNavbar;
