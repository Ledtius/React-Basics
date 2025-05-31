export const PracticeJS = () => {
  const pets = [
    { owner: "Pedro", type: "dog", name: "Rex" },
    { owner: "Juan", type: "cat", name: "Michi" },
    { owner: "Pedro", type: "parrot", name: "Loro" },
    { owner: "Lucía", type: "dog", name: "Firulais" },
  ];

  /* 1. Create a `Map` where each key is an owner’s name and the value is an array of pet names.
    
2. Create a `Set` with the unique pet types.
    
3. Generate an array of objects like:
    

```js
{ owner: "Pedro", petsCount: 2 }
```

Use `reduce`. */

  /* 1 */

  let ownersAndPets = Object.values(
    pets.map(({ owner, name }) => ({ [`${owner}`]: name }))
  );

  console.log(ownersAndPets);

  /* 2 */

  const transformToArray = Object.values(
    pets.map(({ owner, name }) => [owner, name])
  )
    .map(([name, pet], index, array) => [name, [pet]])
    .flat();

  console.log(transformToArray);

  const onlyNames = [
    ...new Set(
      transformToArray.filter((element) => typeof element === "string")
    ),
  ];

  console.log(onlyNames);

  const combinePets = transformToArray.map((element, index, array) => {
    if (typeof element === "string") {
      // console.log(element);

      // for (let index = 0; index < onlyNames.length; index++) {
      //   const element = onlyNames[index];
      //   console.log(element);

      // }
      // console.log(onlyNames.indexOf(element));
      console.log(array.indexOf(onlyNames[1]) );
    }
  });

  // const combinePets = transformToArray.map(([name, arrayPet], index, array) => {
  //   console.log(name);
  //   console.log(array[index]);
  //   console.log(array[index].indexOf(name));
  // });

  /* 3 */

  const counterNames = pets.reduce((acc, { owner }) => {
    acc[owner] = (acc[owner] || 0) + 1;

    return acc;
  }, {});

  console.log(counterNames);

  const noRepeatNames = [...new Set(pets.map(({ owner }) => owner))];

  const transformToObject = noRepeatNames.map((name) => ({
    owner: name,
  }));

  console.log(transformToObject);

  let counterPerOwner;

  const onlyCount = Object.values(counterNames).map((value) => value);

  console.log(onlyCount);

  counterPerOwner = transformToObject.map(({ owner }, index) => ({
    owner,
    petsCount: onlyCount[index],
  }));
  // console.log(value);

  console.log(counterPerOwner);
};
