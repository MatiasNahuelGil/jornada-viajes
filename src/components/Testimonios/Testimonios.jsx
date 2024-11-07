import "./Testimonios.css";

export default function Testimonios({
  name,
  description,
  avatar,
  alt,
  children,
}) {
  return (
    <>
      <article className="testimonial__container">
        <p>{description}</p>
        <div className="profile__container">
          <img src={avatar} alt={alt} />

          <div>
            <h3 className="avatar__name">{name}</h3>
            {children}
          </div>
        </div>
      </article>
    </>
  );
}
