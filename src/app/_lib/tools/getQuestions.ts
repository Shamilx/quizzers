import { secureQuiz } from "@/app/_lib/tools/secureQuiz";

async function fetchQuizFromServerWithProps(
  category: string,
  difficulty: string,
  limit: string,
) {
  const endpoint = `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}`;
  const apiReqData = `difficulty=${difficulty}&category=${category}&limit=${limit}`;

  const quizRes = await fetch(endpoint.concat(`&${apiReqData}`), {
    cache: "no-cache",
  });

  const quiz = await quizRes.json();

  if (quizRes.status !== 200) {
    return quiz;
  }

  const newQuiz = secureQuiz(quiz);
  return newQuiz;
}

async function fetchRandomQuiz() {
  const endpoint = `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}`;
  const quizRes = await fetch(endpoint, { cache: "no-cache" });
  const quiz = await quizRes.json();

  if (quizRes.status !== 200) {
    return quiz;
  }

  const newQuiz = secureQuiz(quiz);
  return newQuiz;
}

export type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function getQuizWithProps({ searchParams }: Props) {
  const category = searchParams.category;
  const difficulty = searchParams.difficulty;
  const limit = searchParams.questions;

  return await fetchQuizFromServerWithProps(
    category as string,
    difficulty as string,
    limit as string,
  );
}

export async function getRandomQuiz() {
  return await fetchRandomQuiz();
}
