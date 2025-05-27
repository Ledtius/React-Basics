export const PracticeJS = () => {
  const users = [
    { name: "Ana", age: 28, skills: ["JavaScript", "React"] },
    { name: "Luis", age: 35, skills: ["Java", "Spring", "SQL"] },
    { name: "Marta", age: 22, skills: ["HTML", "CSS", "JavaScript"] },
  ];

  /* 
1. Create a new array with the names of users older than 25.
    
2. Build a **unique skills array** using `Set`.
    
3. Use `reduce` to build a summary object like:
  { totalUsers: 3,
  averageAge: 28.3,
  allSkills: [ unique skills ]
  }
*/

  const usersGreater25 = users.filter(({ age }) => age > 25);

  console.log(usersGreater25);

  let noRepeatSkills = [...new Set(users.map(({ skills }) => skills).flat())];

  console.log(noRepeatSkills);

  //3. The form that the exercise said
  let countAgeValue = 0;
  const allUsersInformation = users.reduce((acc, user, index, array) => {
    const { age } = user;

    acc["totalUsers"] = array.length;

    countAgeValue += age;
    console.log(countAgeValue);

    if (index === array.length - 1) {
      acc["averageAge"] = (countAgeValue / array.length).toFixed(1);
      acc.allSkills = noRepeatSkills;
    }

    return acc;
  }, {});
  // 3. But more easy (Personally)
  const averageAge = (
    users.reduce((acc, { age }) => acc + age, 0) / users.length
  ).toFixed(1);

  const data = {
    totalUsers: users.length,
    averageAge,
    allSkills: noRepeatSkills,
  };

  console.log(data);
  console.log(allUsersInformation);
};
