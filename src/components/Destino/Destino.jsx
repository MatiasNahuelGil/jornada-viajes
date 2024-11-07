
import { useNavigate } from 'react-router-dom';
import './Destino.css';


export default function Destino({cityImage,title,description,id}){

    const navigate = useNavigate();


     /*Función que controla la navegación hacia los distintos destinos, haciendo click en el botón ver detalles */
    const handleDestinationClick = () => {
        navigate(`/destination/${id}`)
        
    }

    return (
        <>
         
           <div className='destination__card'>
              <img src={cityImage} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
              <button onClick={handleDestinationClick}>Ver detalles</button>
           </div> 
         
           
        </>
    )
}