import './Formulario.css';

export default function Formulario(){
    return (
        <>
           <form className='form__container'>
               <li className='form__container--list'>
                  <input type="text" placeholder='Tu nombre'/>
               </li>
               <li className='form__container--list'>
                  <input type="text" placeholder='Teléfono'/>
               </li>
               <li className='form__container--list'>
                  <input type="text" placeholder='Correo'/>
               </li>
               <li className='form__container--list'>
                  <textarea placeholder='Asunto'></textarea>
               </li>
               <button className='form__send'>Enviar</button>
           </form>
        </>
    )
}