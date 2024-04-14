export type TypeQuiz = SingleQuestion[] & {error: string};

export interface SingleQuestion {
  id: number;
  question: string;
  description: null;
  answers: Answers;
  multiple_correct_answers: string;
  correct_answers: CorrectAnswers | null;
  correct_answer: CorrectAnswer | null;
  explanation: string;
  tip: string;
  tags: Tag[];
  category: string;
  difficulty: Difficulty;
  ENCRYPTED_ANSWER: string | null;
}

interface Answers {
  answer_a: string;
  answer_b: string;
  answer_c?: string;
  answer_d?: string;
  answer_e?: string;
  answer_f?: string;
}

enum CorrectAnswer {
  AnswerA = "answer_a",
  AnswerC = "answer_c",
  AnswerD = "answer_d",
}

interface CorrectAnswers {
  answer_a_correct: string;
  answer_b_correct: string;
  answer_c_correct: string;
  answer_d_correct: string;
  answer_e_correct: string;
  answer_f_correct: string;
}

enum Difficulty {
  Easy = "Easy",
  Hard = "Hard",
  Medium = "Medium",
}

interface Tag {
  name: string;
}
