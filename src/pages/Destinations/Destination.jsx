import './Destination.css'
import { useParams } from 'react-router-dom';
import { DESTINATIONS } from '../../data/destino'; 


export default function DestinationDetail() {
  const { destinationId } = useParams();
  

  const destination = DESTINATIONS.find(dest => dest.id === destinationId);

  if (!destination) {
    return <p>Destino no encontrado.</p>;
  }

  return (
      <article className="section__container">
          <h2>{destination.title}</h2>
          <div className='section__underline'></div>
          <div className='destination__container--image'>
              <img src={destination.cityImage} alt={destination.title} />
          </div>
          <p>{destination.description}</p>
          <h3 className='destination__lodging'>Alojamiento / Hoteles</h3>
          <article className="hotels__list">
                   {destination.hotels.map(hotel => (
                        <div key={hotel.id} className="hotel__card">
                           <h4>{hotel.name}</h4>
                           <img src={hotel.hotelImage} alt="" />
                           <p>Calificación: {hotel.rating} estrellas </p>
                           <div className="stars">
                                {Array.from({ length: Math.floor(hotel.rating) }, (_, i) => (
                                      <i key={i} className="bx bxs-star"></i> 
                                  ))}
                                 {hotel.rating % 1 >= 0.5 && <i className="bx bxs-star-half"></i>} 
                          </div>
                        </div>
            ))}
           </article>
      </article>
  );
}
