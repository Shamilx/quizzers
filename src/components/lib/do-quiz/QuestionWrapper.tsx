import { SingleQuestion } from "@/types/retrieved_quiz";

export default function QuestionWrapper({
  question,
  questionIndex,
}: {
  question: SingleQuestion;
  questionIndex: number;
}) {
  return (
    <div>
      <p>{question.question}</p>

      <div className="flex flex-col items-start justify-start">
        {getAnswers(question).map((answer, index) => {
          return (
            <div className="flex items-center justify-center gap-2" key={[question.id,index].join()}>
              <input
                type="radio"
                name={`answer-radio-${questionIndex}`}
                value={index}
              />
              
              {answer}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getAnswers(question: SingleQuestion) {
  const label = (text: string) => <label>{text}</label>;

  const answers = [
    label(question.answers.answer_a),
    label(question.answers.answer_b),
  ];

  if (question.answers.answer_c) answers.push(label(question.answers.answer_c));

  if (question.answers.answer_d) answers.push(label(question.answers.answer_d));

  if (question.answers.answer_e) answers.push(label(question.answers.answer_e));

  if (question.answers.answer_f) answers.push(label(question.answers.answer_f));

  return answers;
}
