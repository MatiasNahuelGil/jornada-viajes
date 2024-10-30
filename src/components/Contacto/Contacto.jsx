import { BANNERS } from "../../data/banner";
import Banner from "../Banner/Banner";
import Formulario from "../Formulario/Formulario";
import Section from "../Section/Section";
import './Contacto.css'

export default function Contacto(){
    return(
        <>
           <Banner {...BANNERS[2]} />
           <Section title="Rellena el formulario">
            <div className="form">
                <p className="help__container">Tenemos un equipo siempre listo para resolver tus dudas, problemas, ofrecerte consejos y orientaciones objetivas para hacer tu experiencia lo más placentera y tranquila posible. Completa tus datos y te contactaremos según la urgencia de tu solicitud. ¡Puedes confiar en nosotros!</p>
                <Formulario/>
            </div> 
                
           </Section>
        </>
    )
}