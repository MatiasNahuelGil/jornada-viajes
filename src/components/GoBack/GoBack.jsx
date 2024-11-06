import './GoBack.css'
import { useNavigate } from 'react-router-dom';

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
