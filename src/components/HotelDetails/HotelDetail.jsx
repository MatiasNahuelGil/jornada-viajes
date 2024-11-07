import "./HotelDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import { DESTINATIONS } from "../../data/destino";
import { useState } from "react";
import GoBack from "../GoBack/GoBack";

export default function HotelDetail() {
  const { hotelId } = useParams();
  const navigate = useNavigate();

  const hotel = DESTINATIONS.flatMap((dest) => dest.hotels).find(
    (hotel) => hotel.id === parseInt(hotelId)
  );

  if (!hotel) {
    return <p>Hotel no encontrado.</p>;
  }

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert("Por favor, selecciona las fechas de entrada y salida.");
      return;
    }

    const reservation = {
      hotelId: hotel.id,
      hotelName: hotel.name,
      checkIn,
      checkOut,
    };

    const existingReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    existingReservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(existingReservations));

    navigate("/cart");
  };

  return (
    <>
      <GoBack />
      <article className="hotel__detail">
        <div className="hotel__detail--description">
          <h2>{hotel.name}</h2>
          <img src={hotel.hotelImage} alt={`Imagen del hotel ${hotel.name}`} />
          <p>{hotel.description || "Descripción no disponible."}</p>
        </div>
        <div className="hotel__detail--reservation">
          <h3>Reservar</h3>
          <label>
            Fecha de entrada:
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </label>
          <label>
            Fecha de salida:
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </label>
          <button onClick={handleReserve}>Enviar al carrito</button>
        </div>
      </article>
    </>
  );
}
