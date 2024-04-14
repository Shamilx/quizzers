import { NextRequest, NextResponse } from "next/server";
import { secureQuiz } from "../_lib/secureQuiz";

export async function GET(req: NextRequest) {
  const endpoint = `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}`;
  const quizRes = await fetch(endpoint, { cache: "no-cache" });

  if (quizRes.status !== 200) {
    return NextResponse.json(quizRes);
  }

  const quiz = await quizRes.json();
  const newQuiz = secureQuiz(quiz);

  return NextResponse.json(newQuiz);
}
