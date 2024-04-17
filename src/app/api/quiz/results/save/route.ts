import { NextRequest, NextResponse } from "next/server";

import { db } from "@/firebase/server";
import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  const { results, userUID } = await req.json();

  const refToUserDoc = doc(db, "users", userUID);

  const pastResults = (await getDoc(refToUserDoc)).get("results") as object[];

  let trueAnswers = 0;
  results.map((result: boolean) => (result === true ? trueAnswers++ : false));

  if (pastResults === undefined) {
    await setDoc(refToUserDoc, {
      results: arrayUnion({
        quizLength: results.length,
        trueAnswers: trueAnswers,
      }),
    });
    return NextResponse.json({ msg: "Done" });
  } else {
    pastResults.push({ quizLength: results.length, trueAnswers: trueAnswers });
    await setDoc(refToUserDoc, { results: pastResults });
    return NextResponse.json({ msg: "Done" });
  }
}
