import { BANNERS } from "../../data/banner";
import { DESTINATIONS } from "../../data/destino";
import Banner from "../Banner/Banner";
import Destino from "../Destino/Destino";
import Section from "../Section/Section";
import temploOne from '../../assets/images/temploJapon.png'
import temploTwo from '../../assets/images/temploJapon-2.png'
import temploThree from '../../assets/images/temploJapon-3.png'
import Venta from "../Venta/Venta";
import { SALES } from "../../data/ventas";
import japaneseWomen from "../../assets/images/mujeres-japonesas.png";
import Testimonios from "../Testimonios/Testimonios";
import { HOME_TESTIMONIALS } from "../../data/testimonios";
import starRed from '../../assets/icons/star-1.svg';
import starGray from '../../assets/icons/star-2.svg';

export default function Paquetes(){
    return(
        <>
           <Banner {...BANNERS[1]}/>
           <Section title="Destinos de la excursión">
               <Destino {...DESTINATIONS[0]}/>
               <Destino {...DESTINATIONS[1]}/>
           </Section>
           <Section title="Pago">
                  <Venta {...SALES[2]}>
                  <div className="sales__container--group">
                        <div className="sales__container--images">
                            <img className="sales__image" alt="" src={temploOne} />
                        </div>
                        <div className="sales__container--images">
                            <img className="sales__image" alt="" src={temploTwo} />
                        </div>
                    </div>
                    <div className="sales__container--image">
                        <img className="sales__image" alt="" src={temploThree} />
                    </div>
                  </Venta>
           </Section>
           <Section title="Testimonios">
               <Testimonios {...HOME_TESTIMONIALS[3]}>
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starGray} alt="icono de estrella gris" />
               </Testimonios>
               <Testimonios {...HOME_TESTIMONIALS[4]}>
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starGray} alt="icono de estrella gris" />   
               </Testimonios>
               <Testimonios {...HOME_TESTIMONIALS[5]}>
               <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" /> 
               </Testimonios>
           </Section>
           <div>
              <img src={japaneseWomen} alt="Mujeres japonesas vestidas con kimono" />
           </div>
        </>
    )
}