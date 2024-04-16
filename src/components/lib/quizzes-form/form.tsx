"use client";

import { FormEvent } from "react";
import { getResults } from "@/app/_lib/tools/getResults";
import { TypeQuiz } from "@/types/retrieved_quiz";
import { useRouter } from "next/navigation";
import { useSessionAuth } from "@/firebase/components/auth-provider";
import { saveUserResults } from "@/app/_lib/tools/setResults";

type Props = {
  children: React.ReactNode;
  quiz: TypeQuiz;
};

export default function Form({ children, quiz }: Props) {
  const router = useRouter();
  const auth = useSessionAuth();

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();

    const results = await getResults(e, quiz);

    if (!results) {
      alert("PLEASE DO ALL QUIZ.");
      return;
    }

    if (auth?.user) saveUserResults(results.results, auth.user.email as string);

    router.replace(`result?results=${results.results}`);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={formHandler}>
      {children}
    </form>
  );
}
