import Banner from "../../components/Banner/Banner";
import { BANNERS } from "../../data/banner";
import Section from "../../components/Section/Section";
import Venta from "../../components/Venta/Venta";
import { SALES } from "../../data/ventas";
import imageTokyo from "../../assets/images/Tokyo-2.png";
import imageTokyoTwo from "../../assets/images/tokyo.png";
import { DESTINATIONS } from "../../data/destino";
import Destino from "../../components/Destino/Destino";
import Route from "../../components/Route/Route";
import { ROUTES } from "../../data/route";
import './Blog.css';

export default function Blog() {
  return (
    <>
      <Banner {...BANNERS[0]} />
      
      <Section title="Tokyo">
        <Venta {...SALES[1]}>
          <div className="sales__container--images">
            <img className="sales__image" alt="imagen de tienda en tokyo" src={imageTokyo} />
          </div>
        </Venta>
      </Section>
      
      <section className="routes__container">
        {ROUTES.map((route, index) => (
          <div key={route.id || index}> 
            <Route title={route.title} description={route.description} />
            {index === 1 && (
              <img className="imageTokyo" src={imageTokyoTwo} alt="Puente de la ciudad de Tokyo" />
            )}
          </div>
        ))}
      </section>
      
      <Section title="Quizás también te gusten estas publicaciones">
        {DESTINATIONS.slice(1, 4).map((dest, index) => (
          <Destino key={dest.id || index} {...dest} />
        ))}
      </Section>
    </>
  );
}
