import "./Section.css";

export default function Section({ children, title }) {
  return (
    <>
      <section
        className="section__container"
        role="region"
        aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
      >
        <h2 id={title.replace(/\s+/g, "-").toLowerCase()}>{title}</h2>
        <div className="section__underline"></div>
        <article className="section__container--child">{children}</article>
      </section>
    </>
  );
}
