export const PracticeJS = () => {
  const survey = [
    { id: 1, name: "Carlos", answers: { q1: "Yes", q2: "No", q3: "Yes" } },

    { id: 2, name: "Ana", answers: { q1: "Yes", q2: "Yes", q3: "No" } },

    { id: 3, name: "Lucía", answers: { q1: "No", q2: "Yes", q3: "Yes" } },
  ];

  /* 1 */
  const countYesAnswers = survey.reduce((acc, { answers }) => {
    for (const [key, value] of Object.entries(answers)) {
      console.log(key, value);
      if (value === "Yes") acc[key] = (acc[key] || 0) + 1;
    }

    return acc;
  }, {});

  console.log(countYesAnswers);

  /* 2 */

  const viewAnswers = survey.map(({ name, answers }) => {
    // console.log(name, answers);
    const onlyAnswers = Object.values(answers).join(" ,");
    console.log(onlyAnswers);

    return `${name}: ${onlyAnswers}`;
  });

  console.log(viewAnswers);

  /* 3 */

  const addNewResponse = (question = "q4", answer = "Yes") => {
    let newSurveyQuestion = [...survey].map(({ id, name, answers }) => ({
      id,
      name,
      ["answers"]: { ...answers, [`${question}`]: answer },
    }));

    // newSurveyQuestion = newSurveyQuestion.map((element) => {
    //   element.answers[question] = answer;
    //   return element;
    // });

    return newSurveyQuestion;
  };

  console.log(addNewResponse("q100", "No"));
};
