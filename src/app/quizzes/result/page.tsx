import Image from "next/image";
import { Props } from "@/app/_lib/tools/getQuestions";

import doneJPG from "@/image/wepik-export-20240416090356uaJb.png";
import Link from "next/link";
import SaveResultWithAuth from "@/components/lib/save-result/SaveResultWithAuth";

export default function Result({ searchParams }: Props) {
  const results = (searchParams.results as string).split(",");

  let trueAnswers = 0;
  let falseAnswers = 0;

  results.forEach((result) => {
    if (result === "true") trueAnswers++;

    if (result === "false") falseAnswers++;
  });

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="flex flex-col gap-3">
        <Image src={doneJPG} alt="done" width={400} />
        <div className="flex gap-3 text-white">
          <div className="flex-1 rounded-lg bg-green-700 p-3">
            <p>True Answers: {trueAnswers}</p>
          </div>
          <div className="flex-1 rounded-lg bg-red-700 p-3">
            False Answers: {falseAnswers}
          </div>
        </div>

        <Link replace={true} href={"/"} className="self-center bg-black text-white px-2 py-1 rounded-lg hover:bg-zinc-900 transition-colors">
          Back to homepage
        </Link>

        <SaveResultWithAuth />
      </div>
    </div>
  );
}
