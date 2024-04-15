
// ONLY WORKS WITH CLIENT COMPONENTS!
// BECAUSE IT CHECKES QUIZ ON API. /API/QUIZ/CHECK

export async function checkQuiz(
  formdata: FormData,
  encrypted_asnwers: string[],
) {
  let count = 0;
  const answers = [];

  while (formdata.get(`answer-radio-${count}`) !== null) {
    const value = formdata.get(`answer-radio-${count}`)?.valueOf();

    switch (value) {
      case '0':
        answers.push("a");
        break;
      case '1':
        answers.push("b");
        break;
      case '2':
        answers.push("c");
        break;
      case '3':
        answers.push("d");
        break;
      case '4':
        answers.push("e");
        break;
      case '5':
        answers.push("f");
        break;
    }

    count++;
  }

  const res = await fetch(`/api/quiz/check`,{
    method: "POST",
    body: JSON.stringify({sended_answers: answers,encrypted_asnwers})
  });

  return res;
}
