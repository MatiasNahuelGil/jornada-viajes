import './Destination.css';
import { useParams } from 'react-router-dom';
import { DESTINATIONS } from '../../data/destino';
import { Link } from 'react-router-dom';
import GoBack from '../../components/GoBack/GoBack';


export default function DestinationDetail() {
  const { destinationId } = useParams();
  const destination = DESTINATIONS.find(dest => dest.id === destinationId);

  if (!destination) {
    return <p>Destino no encontrado.</p>;
  }

  return (
    <>
     <GoBack/>
    <article className="section__container">
      <h2>{destination.title}</h2>
      <div className="section__underline"></div>
      <div className="destination__container--image">
        <img src={destination.cityImage} alt={`Imagen de la ciudad de ${destination.title}`} />
      </div>
      <p>{destination.description}</p>
      
      <h3 className="destination__lodging">Alojamiento / Hoteles</h3>
      <section className="hotels__list" aria-labelledby="destination-lodging">
           {destination.hotels.map(hotel => (
           <div key={hotel.id} className="hotel__card">
           <h4>{hotel.name}</h4>
             <Link to={`/hotel/${hotel.id}`}> 
                 <img src={hotel.hotelImage} alt={`Imagen del hotel ${hotel.name}`} />
            </Link>
            <p>Calificación: {hotel.rating} estrellas</p>
           <div className="stars" aria-label={`Calificación de ${hotel.rating} estrellas`}>
               {Array.from({ length: Math.floor(hotel.rating) }, (_, i) => (
              <i key={i} className="bx bxs-star" aria-hidden="true"></i>
            ))}
           {hotel.rating % 1 >= 0.5 && <i className="bx bxs-star-half" aria-hidden="true"></i>}
         </div>
       </div>
      ))}
     </section>
    </article>
    
    </>
    
  );
}
