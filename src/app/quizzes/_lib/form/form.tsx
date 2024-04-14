'use client';

import { FormEvent } from "react";
import { getResults } from "../get/getResults";
import { TypeQuiz } from "@/types/retrieved_quiz";
import { useRouter } from "next/navigation";

type Props = {
    children: React.ReactNode,
    quiz: TypeQuiz
};

export default function Form({children,quiz} : Props) {
  const router = useRouter();

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();

    const results = await getResults(e,quiz);

    if(!results) {
        alert("PLEASE DO ALL QUIZ.");
        return;
    }
    
    router.replace(`result?results=${results.results}`)
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={formHandler}>{children}</form>
  )
}
