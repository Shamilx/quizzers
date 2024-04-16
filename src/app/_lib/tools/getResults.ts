import { checkQuiz } from "@/app/_lib/tools/checkQuiz";
import { TypeQuiz } from "@/types/retrieved_quiz";
import { FormEvent } from "react";

export async function getResults(e: FormEvent, quiz: TypeQuiz) {
  // CHECK IF ALL RADIOS ARE DONE
  // CHECK IF ALL RADIOS ARE DONE
  // CHECK IF ALL RADIOS ARE DONE
  const newE = new FormData(e.currentTarget as HTMLFormElement);
  let count = 0;

  for (let i = 0; i < quiz.length; i++) {
    if (newE.get(`answer-radio-${i}`)) count++;
  }
  // CHECK IF ALL RADIOS ARE DONE
  // CHECK IF ALL RADIOS ARE DONE
  // CHECK IF ALL RADIOS ARE DONE

  if (count !== quiz.length) {
    return null;
  }

  const encrypted_asnwers = quiz.map(
    (question) => question.ENCRYPTED_ANSWER,
  ) as string[];

  const res = await checkQuiz(newE, encrypted_asnwers);
  const results = await res.json();
  return results;
}
