import "./Venta.css";

export default function Venta({ title, description, children }) {
  return (
    <>
      <article className="sales__container--ad">
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
      <article className="sales__container--child">{children}</article>
    </>
  );
}
