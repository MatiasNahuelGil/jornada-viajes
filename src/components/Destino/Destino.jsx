
import './Destino.css';


export default function Destino({cityImage,title,description}){
    return (
        <>
         
           <div className='destination__card'>
              <img src={cityImage} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
              <button>Ver detalles</button>
           </div> 
         
           
        </>
    )
}