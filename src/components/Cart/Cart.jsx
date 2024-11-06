import './Cart.css';
import { useEffect, useState } from 'react';
import { DESTINATIONS } from '../../data/destino';
import GoBack from '../GoBack/GoBack';

export default function Cart() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    
    
    const completeReservations = storedReservations.map(reservation => {
      const destination = DESTINATIONS.find(dest => 
        dest.hotels.some(hotel => hotel.id === reservation.hotelId)
      );

      const hotel = destination?.hotels.find(hotel => hotel.id === reservation.hotelId);

      return hotel ? {
        ...reservation,
        hotelName: hotel.name,
        hotelImage: hotel.hotelImage,
        confirmed: false
      } : reservation;
    });

    setReservations(completeReservations);
  }, []);

  // Función para confirmar una reserva individual
  const confirmReservation = (index) => {
    setReservations(prevReservations => 
      prevReservations.map((reservation, i) => 
        i === index ? { ...reservation, confirmed: true } : reservation
      )
    );
  };

  // Función para eliminar una reserva individual
  const deleteReservation = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };

  // Función para confirmar todas las reservas
  const confirmAllReservations = () => {
    const updatedReservations = reservations.map(reservation => ({
      ...reservation,
      confirmed: true
    }));
    setReservations(updatedReservations);
  };

  // Función para eliminar todas las reservas
  const deleteAllReservations = () => {
    setReservations([]);
    localStorage.removeItem('reservations');
  };

  return (
    <>
    <GoBack/>
    <div className='cart__container'>
      <h2>Carrito de Reservas <i className='bx bx-cart' ></i></h2>
      <div className='cart__container--hotels'>

      
      {reservations.length === 0 ? (
        <p>No hay reservas en el carrito.</p>
      ) : (
        reservations.map((reservation, index) => (
          <div key={index} className='cart__hotel--reservation'>
            <h4>{reservation.hotelName}</h4>
            <img src={reservation.hotelImage} alt={reservation.hotelName}/> 
            <p>Fecha de entrada: {reservation.checkIn}</p>
            <p>Fecha de salida: {reservation.checkOut}</p>
            {reservation.confirmed ? (
              <p>Tu reserva ha sido confirmada. <i class='bx bx-check-double'></i></p>
            ) : (
              <div className='cart__hotel--confirm'>
                <button 
                  className='cart__hotel--confirm-add' 
                  onClick={() => confirmReservation(index)}
                >
                  Confirmar reserva <i className='bx bxs-like'></i>
                </button>
                <button 
                  className='cart__hotel--confirm-delete' 
                  onClick={() => deleteReservation(index)}
                >
                  Eliminar reserva <i className='bx bxs-trash-alt'></i>
                </button>
              </div>
            )}
          </div>
        ))
      )}
     </div> 
      
      {reservations.length > 0 && (
        <div className='cart__actions'>
          <button  onClick={confirmAllReservations} className='cart__confirm-all cart__hotel--confirm-add'>
            Confirmar todas las reservas
          </button>
          <button onClick={deleteAllReservations} className='cart__delete-all cart__hotel--confirm-delete'>
            Eliminar todas las reservas
          </button>
        </div>
      )}
    </div>
    </>
    
  );
}
