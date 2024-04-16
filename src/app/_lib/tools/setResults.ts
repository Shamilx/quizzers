import { db } from "@/firebase/server";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { calculateResultTruth } from "./calculateResultTruth";

export async function saveUserResults(results: [], userUID: string) {
  const refToUserDoc = doc(db, "users", userUID);

  const pastResults = (await getDoc(refToUserDoc)).get("results") as object[];
  
  let trueAnswers = 0;
  results.map(result => result === 'true' ? trueAnswers++ : false);

  if (pastResults === undefined) {

    await setDoc(refToUserDoc, { results: arrayUnion({quizLength:results.length,trueAnswers: trueAnswers}) });
    return;
  } else {
    pastResults.push({quizLength:results.length,trueAnswers: trueAnswers});
    await setDoc(refToUserDoc, { results: pastResults });
    return;
  }
}
