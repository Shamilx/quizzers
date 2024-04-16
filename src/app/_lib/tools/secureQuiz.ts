import { SingleQuestion, TypeQuiz } from "@/types/retrieved_quiz";
import { string_encryptor } from "@/app/_lib/tools/crypt/encrypt";

export function secureQuiz(quiz: TypeQuiz) {
  const newQuiz = quiz.map((question) => {

    return secureQuestion(question);
  });

  return newQuiz;
}

function secureQuestion(question: SingleQuestion) {

  const correctAnswers = getCorrectAnswers(question);
  eraseCorrectAnswerProperty(question);
  return { ...question, ENCRYPTED_ANSWER: encryptCorrectAnswers(correctAnswers) };
}

function getCorrectAnswers(question: SingleQuestion): string[] {
  const correctAnswers: string[] = [];

  if (question.correct_answers?.answer_a_correct === "true")
    correctAnswers.push("a");

  if (question.correct_answers?.answer_b_correct === "true")
    correctAnswers.push("b");

  if (question.correct_answers?.answer_c_correct === "true")
    correctAnswers.push("c");

  if (question.correct_answers?.answer_d_correct === "true")
    correctAnswers.push("d");

  if (question.correct_answers?.answer_e_correct === "true")
    correctAnswers.push("e");

  if (question.correct_answers?.answer_f_correct === "true")
    correctAnswers.push("f");

  return correctAnswers;
}

function eraseCorrectAnswerProperty(question: SingleQuestion) {
  question.correct_answer = null;
  question.correct_answers = null;
}

function encryptCorrectAnswers(correct_answers: string[]) {
  return string_encryptor(correct_answers.toString());
}
