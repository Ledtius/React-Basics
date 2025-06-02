export const PracticeJS = () => {
  console.log(groupByType(1, "hello", true, 99, "world", false));
  /* → {
  number: [1, 99],
  string: ["hello", "world"],
  boolean: [true, false]
} */

  function groupByType(...values) {
    return values.reduce((acc, value) => {
      const type = typeof value;
      if (!acc[type]) acc[type] = [];
      acc[type].push(value);
      return acc;
    }, {});
  }
};
