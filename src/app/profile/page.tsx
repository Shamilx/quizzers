"use client";

import Protected from "@/firebase/components/access/protected";
import { useEffect, useState } from "react";
import LoadingSpinner from "../loading";
import { useSessionAuth } from "@/firebase/components/auth-provider";

type Result = {
  quizLength: number;
  trueAnswers: number;
};

export default function Profile() {
  const [results, setResults] = useState<Result[]>();
  const auth = useSessionAuth();

  useEffect(() => {
    const fetchResults = async () => {
      return await fetch("/api/quiz/results/get", {
        method: "POST",
        body: JSON.stringify({ userUID: auth?.user?.email }),
      });
    };

    fetchResults()
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) console.log(res.msg);
        else setResults(res);
      });
  }, [auth]);

  return (
    <Protected>
      {results ? (
        <div className="mx-5 my-5 flex-1 rounded-2xl border border-black p-3 flex flex-col gap-5">
          <div>
            <p>{auth?.user?.email}</p>
          </div>

          <ul className="flex gap-5 flex-wrap">
            {results.map((result, index) => {
              return (
                <li key={index} className="border border-black px-3 py-5 rounded-lg">
                  <p>Quiz length: {result.quizLength}</p>
                  <p>True Answers: {result.trueAnswers}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Protected>
  );
}
