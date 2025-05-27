export const PracticeJS = () => {
  function greet(name = "Guest") {
    return `Hello, ${name}!`;

    // 9. Make this function print "Hello, <name>!" where name is the parameter, or "Guest" if no argument passed.
  }

  // 10. Call greet with and without argument.

  console.log(greet());
  console.log(greet("Calet"));
};
