export const PracticeJS = () => {
  // Given the following array:
  const rgb = [255, 100, 50];

  // 👉 Use array destructuring to assign values to variables red, green, blue
  // and log: "Red: 255, Green: 100, Blue: 50"

  const [red, green, blue] = rgb;

  console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
};
