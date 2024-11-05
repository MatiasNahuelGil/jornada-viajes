import { BANNERS } from "../../data/banner";
import Banner from "../../components/Banner/Banner";
import Formulario from "../../components/Formulario/Formulario";
import Section from "../../components/Section/Section";
import './Contact.css'

export default function Contact(){
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