import Banner from "../Banner/Banner";
import { BANNERS } from "../../data/banner";
import Section from "../Section/Section";
import Venta from "../Venta/Venta";
import { SALES } from "../../data/ventas";
import imageTokyo from "../../assets/images/Tokyo-2.png";
import imageTokyoTwo from "../../assets/images/Tokyo.png"
import { DESTINATIONS } from "../../data/destino";
import Destino from "../Destino/Destino";
import Route from "../Route/Route";
import { ROUTES } from "../../data/route";
import './Blog.css'


export default function Blog(){
    return (
        <>
          <Banner {...BANNERS[0]}/>
          <Section title="Tokyo">
            <Venta {...SALES[1]}>    
                  <div className="sales__container--images">
                         <img className="sales__image" alt="" src={imageTokyo} />
                  </div>
            </Venta>  
          </Section>
          <section className="routes__container">
           {ROUTES.map((route, index) => (
                <div key={index}>
                    <Route title={route.title} description={route.description} />
                    {index === 1 && (
                        <img className="imageTokyo" src={imageTokyoTwo} alt="Puente de la ciudad de tokyo" />
                    )}
                </div>
            ))}
          </section>
          
          <Section title="Quizás también te gusten estas publicaciones">
               <Destino {...DESTINATIONS[1]}/>
               <Destino {...DESTINATIONS[2]}/>
               <Destino {...DESTINATIONS[3]}/>
          </Section> 
          
        </>
    )
}