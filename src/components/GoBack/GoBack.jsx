import "./GoBack.css";
import { useNavigate } from "react-router-dom";

/*Componente GoBack = vuelve hacia atrás la navegación */
export default function GoBack() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack} className="go-back-button">
      Volver
    </button>
  );
}
