
import { useNavigate } from 'react-router-dom';
import './Destino.css';


export default function Destino({cityImage,title,description,id}){

    const navigate = useNavigate();

    const handleDestinationClick = () => {
        navigate(`/destination/${id}`)
        console.log("haz hecho click")
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