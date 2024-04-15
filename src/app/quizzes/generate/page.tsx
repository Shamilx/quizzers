import QuestionWrapper from "@/components/lib/do-quiz/QuestionWrapper";
import { TypeQuiz } from "@/types/retrieved_quiz";
import { getQuizWithProps, Props } from "../_lib/get/getQuestions";
import Form from "../_lib/form/form";
import { redirect } from "next/navigation";

export default async function DoQuiz({ searchParams }: Props) {
  const quiz: TypeQuiz = await getQuizWithProps({ searchParams });

  if (quiz.error) {
    console.log(quiz.error);
    redirect("/not-found");
  }

  return (
    <div className="mx-5 mt-10 flex-1 rounded-3xl border border-black p-5">
      <Form quiz={quiz}>
        {quiz.map((question, index) => {
          return (
            <QuestionWrapper
              question={question}
              questionIndex={index}
              key={question.id}
            />
          );
        })}

        <button
          className="self-center rounded-lg border border-black bg-black px-8 py-2 text-white transition-colors hover:bg-white hover:text-black"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
