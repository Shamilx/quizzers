import { NextRequest, NextResponse } from "next/server";
import { string_decryptor } from "../../../_lib/tools/crypt/decrypt";

export async function POST(req: NextRequest) {
  const { sended_answers, encrypted_asnwers } = await req.json();

  const correctAnswers: string[] = encrypted_asnwers.map((answer: string) =>
    string_decryptor(answer),
  );

  if (sended_answers.length !== correctAnswers.length)
    return NextResponse.json({ error: "Please provide all questions" });

  const results = [];

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === sended_answers[i]) results.push(true);
    else results.push(false);
  }

  return NextResponse.json({ results: results });
}
