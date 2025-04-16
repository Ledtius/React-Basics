import greetingStyle from "./greetings.module.css";

export const GreetingsComponent = ({ greeting }) => {
  return <h1 className={greetingStyle["title"]}>{greeting}</h1>;
};
