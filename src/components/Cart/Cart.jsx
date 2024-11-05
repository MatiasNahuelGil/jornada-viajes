
import { useEffect, useState } from 'react';

export default function Cart() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    
    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(storedReservations);
  }, []);

  return (
    <div>
      <h2>Carrito de Reservas</h2>
      {reservations.length === 0 ? (
        <p>No hay reservas en el carrito.</p>
      ) : (
        reservations.map((reservation, index) => (
          <div key={index}>
            <h4>{reservation.hotelName}</h4> 
            <p>Fecha de entrada: {reservation.checkIn}</p>
            <p>Fecha de salida: {reservation.checkOut}</p>
          </div>
        ))
      )}
    </div>
  );
}
