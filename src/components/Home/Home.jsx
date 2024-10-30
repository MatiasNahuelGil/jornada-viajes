import './Home.css';
import bannerHomeHead from '../../assets/images/boteBanner.png';
import bannerHomeFoot from '../../assets/images/pre-footer-image.png'
import Section from '../Section/Section';
import Destino from '../Destino/Destino';
import { DESTINATIONS } from '../../data/destino';
import Venta from '../Venta/Venta';
import { SALES } from '../../data/ventas';
import imagenOneJapon from '../../assets/images/imageOneJapon.png'
import imagentwoJapon from '../../assets/images/imageTwoJapon.png'
import imagenThreeJapon from '../../assets/images/imageThreeJapon.png'
import Testimonios from '../Testimonios/Testimonios';
import { HOME_TESTIMONIALS } from '../../data/testimonios';
import starRed from '../../assets/icons/star-1.svg';
import starGray from '../../assets/icons/star-2.svg';
import Search from '../Search/Search';
import Offer from '../Offer/Offer';
import { OFFERS } from '../../data/Offer';

export default function Home(){

     
    return(
        <>
           <div className='home'>
               <img src={bannerHomeHead} alt="hombre en canoa remando por el río" />
           </div>
           <p className='about__us'>Somos una agencia apasionada por crear viajes inolvidables. Desde el destino hasta la selección de actividades, nos encargamos de todos los detalles para que disfrutes al máximo cada momento de tu jornada.</p>
           <Section title="Ofertas de la semana">
               
                     <Offer {...OFFERS[0]} />
                     <Offer {...OFFERS[1]} />
               
           </Section>
           <Section title="Busca por categoría" >
                 <Search titleIcon="hiking" title="Paquetes Nacionales"/>
                 <Search titleIcon="flight" title="Paquetes Internacionales"/>
                 <Search titleIcon="airport_shuttle" title="Transfer"/>
                 <Search titleIcon="vpn_lock" title="Seguro de Viaje"/>
           </Section>
           <Section title="Destinos populares">
                  <Destino {...DESTINATIONS[0]}/>
                  <Destino {...DESTINATIONS[1]}/>
           </Section>
           <Section title="Condiciones de pago">
                  <Venta {...SALES[0]}>
                  <div className="sales__container--group">
                        <div className="sales__container--images">
                            <img className="sales__image" alt="" src={imagenOneJapon} />
                        </div>
                        <div className="sales__container--images">
                            <img className="sales__image" alt="" src={imagentwoJapon} />
                        </div>
                    </div>
                    <div className="sales__container--image">
                        <img className="sales__image" alt="" src={imagenThreeJapon} />
                    </div>
                  </Venta>
           </Section>
           <Section title="Testimonios">
               <Testimonios {...HOME_TESTIMONIALS[0]}>
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starGray} alt="icono de estrella gris" />
               </Testimonios>
               <Testimonios {...HOME_TESTIMONIALS[1]}>
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starGray} alt="icono de estrella gris" />
                   <img src={starGray} alt="icono de estrella gris" />
               </Testimonios>
               <Testimonios {...HOME_TESTIMONIALS[2]}>
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starRed} alt="icono de estrella roja" />
                   <img src={starGray} alt="icono de estrella gris" />
               </Testimonios>
               
           </Section>
           <div className='home'>
               <img src={bannerHomeFoot} alt="hombre en canoa remando por el río" />
           </div>
        </>
    )
}