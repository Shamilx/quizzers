export type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function fetchQuizWithProps({ searchParams }: Props) {
  const category = searchParams.category;
  const difficulty = searchParams.difficulty;
  const limit = searchParams.questions;

  const requestedPropsFromAPI = { category, difficulty, limit };

  return (
    await fetch(`https://quizzers-nine.vercel.app/api/quiz/generate`, {
      method: "POST",
      body: JSON.stringify(requestedPropsFromAPI),
      cache: "no-cache",
    })
  ).json();
}

export async function getRandomQuiz() {
  const randQuizRes = await fetch(`https://quizzers-nine.vercel.app/api/quiz/rand`, {
    cache: "no-cache",
  });

  const quiz = await randQuizRes.json();

  return quiz;
}
