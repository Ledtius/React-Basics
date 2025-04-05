import "../main.css"

export function RedCard({ title, image, text }) {
  return (
    <div className="card">
      <img className="card__img" src={image} alt="Red Girl 1" />
      <section className="card__information">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{text}</p>
      </section>
    </div>
  );
}
