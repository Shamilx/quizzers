import { TypeQuiz } from "@/types/retrieved_quiz";
import { NextRequest, NextResponse } from "next/server";
import { secureQuiz } from "../_lib/secureQuiz";

export async function POST(req: NextRequest) {
  const requestedData = await req.json();

  const endpoint = `https://quizapi.io/api/v1/questions?apiKey=${process.env.API_KEY}`;
  const apiReqData = `difficulty=${requestedData.difficulty}&category=${requestedData.category}&limit=${requestedData.limit}`;

  const quizRes = await fetch(endpoint.concat(`&${apiReqData}`), {
    cache: "no-cache",
  });

  const quiz = await quizRes.json();

  if (quizRes.status !== 200) {
    return NextResponse.json(quiz);
  }

  const newQuiz = secureQuiz(quiz);
  return NextResponse.json(newQuiz);
}
