export const PracticeJS = () => {
  const settings = [
    { theme: "dark", fontSize: 14 },
    { theme: null, fontSize: 16 },
    { fontSize: 12 }, // no theme property
  ];

  // 5. For each setting, get the theme or fallback to "light" using nullish coalescing.

  const themesAvailable = settings.map((setting) => setting?.theme ?? "light");

  console.log(themesAvailable);
};
