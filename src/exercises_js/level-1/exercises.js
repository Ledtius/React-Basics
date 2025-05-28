export const PracticeJS = () => {
  const survey = [
    { id: 1, name: "Carlos", answers: { q1: "Yes", q2: "No", q3: "Yes" } },
    { id: 2, name: "Ana", answers: { q1: "Yes", q2: "Yes", q3: "No" } },
    { id: 3, name: "Lucía", answers: { q1: "No", q2: "Yes", q3: "Yes" } },
  ];

  /* 
  1. Use `reduce` to count how many times "Yes" was answered per question.  
    Expected result:
    
    ```js
    { q1: 2, q2: 2, q3: 2 }
    ```
    
2. Use `Object.entries` + `map` to create strings like:  
    `"Carlos: Yes, No, Yes"`
    
3. Create a function with **default parameters** that allows adding new responses to the array.
  
  */

  const yesCounterAnswers = survey.reduce((acc, { answers }, index) => {
    const keysA = Object.keys(answers);

    const valuesA = Object.values(answers);

    if (keysA[0]) {
      console.log(index);
      if (valuesA[0] === "Yes") {
        acc[keysA[0]] = (acc[keysA[0]] || 0) + 1;
      }
      if (valuesA[1] === "Yes") {
        acc[keysA[1]] = (acc[keysA[1]] || 0) + 1;
      }
      if (valuesA[2] === "Yes") {
        acc[keysA[2]] = (acc[keysA[2]] || 0) + 1;
      }
    }

    return acc;
  }, {});

  console.log(yesCounterAnswers);

  const answerPerPerson = survey.map(
    ({ name, answers }) => `${name}: ${Object.values(answers)}`
  );
  console.log(answerPerPerson);

  const addResponse = (q4 = "Yes") => {
    return survey.map(({ answers }) => {
      answers["q4"] = q4;
      return answers;
    });

    // console.log(answersSurvey);
  };

  console.log(addResponse("No"));
};
