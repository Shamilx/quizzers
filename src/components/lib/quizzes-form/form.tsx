"use client";

import { FormEvent } from "react";
import { exportResultsFromForm } from "@/app/_lib/tools/exportResultsFromForm";
import { TypeQuiz } from "@/types/retrieved_quiz";
import { useRouter } from "next/navigation";
import { useSessionAuth } from "@/firebase/components/auth-provider";

type Props = {
  children: React.ReactNode;
  quiz: TypeQuiz;
};

export default function Form({ children, quiz }: Props) {
  const router = useRouter();
  const auth = useSessionAuth();

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();

    const results = await exportResultsFromForm(e, quiz);

    if (!results) {
      alert("PLEASE DO ALL QUIZ.");
      return;
    }

    if (auth?.user)
      await fetch("/api/quiz/results/save", {
        method: "POST",
        body: JSON.stringify({ results: results.results, userUID: auth.user.email }),
      });

    router.replace(`result?results=${results.results}`);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={formHandler}>
      {children}
    </form>
  );
}
