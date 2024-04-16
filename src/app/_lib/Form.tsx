"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

type Props = {
  className: string;
  children: React.ReactNode;
};

export default function Form({ children, className }: Props) {
  const router = useRouter();

  const generateQuiz = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newE = new FormData(e.currentTarget);

    const category = newE.get("category");
    const difficulty = newE.get("difficulty");
    const questions = newE.get("questions");

    router.push(
      `quizzes/generate?category=${category}&difficulty=${difficulty}&questions=${questions}`,
    );
  };

  return (
    <form className={className} onSubmit={generateQuiz}>
      {children}
    </form>
  );
}
