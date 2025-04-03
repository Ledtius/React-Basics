// import reactImg from "./assets/react.svg";

export function Card({ name }) {
  return (
    <div className="card">
      <img className="card__img" src={reactImg} alt="React Img" />
      <div className="card__details">
        <h1 className="card__title">{name}</h1>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          voluptates minus repellat, dicta velit et. Natus ad quos ea
          reiciendis, sed magnam repellendus voluptas, alias vitae accusantium
          aliquam reprehenderit laborum.
        </p>
      </div>
    </div>
  );
}
