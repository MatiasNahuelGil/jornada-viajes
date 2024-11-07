import "./Footer.css";


/*Componente Footer */
export default function Footer() {
  return (
    <>
      <footer className="footer__container">
        <section className="footer">
          <div className="footer__logo-container">
            <img
              className="footer__logo-icon"
              alt=""
              src="./img/logobranco-1@2x.png"
            />
            <div className="footer__info-container">
              <div className="footer__text-info">
                Horario de atendimiento: 08h - 20h (Lunes a Sábado)
              </div>
              <div className="footer__text-info">
                Desarrollado por Gil Matias. Proyecto fictício sin fines
                comerciales.
              </div>
            </div>
          </div>
          <div className="footer__social-media-container">
            <h4 className="footer__social-media-text">
              Accede a mis redes sociales:
            </h4>
            <div className="footer__social-media-icons">
              <a href="https://www.linkedin.com/in/matias-nahuel-gil-732b78308/">
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a href="https://github.com/MatiasNahuelGil">
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
