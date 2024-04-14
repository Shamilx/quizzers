import { Props } from "../_lib/get/getQuestions";

export default function Result({ searchParams }: Props) {
  const results = (searchParams.results as string).split(",");

  let trueAnswers = 0;
  let falseAnswers = 0;

  results.forEach((result) => {
    if (result === "true") trueAnswers++;

    if (result === "false") falseAnswers++;
  });

  return (
    <div>
      <p>True Answers : {trueAnswers}</p>
      
      <p>False Answers : {falseAnswers}</p>
    </div>
  );
}
