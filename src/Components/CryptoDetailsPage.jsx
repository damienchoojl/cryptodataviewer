import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CryptoDetailsPage() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="btn btn-outline-secondary" onClick={handleHomeClick}>
        Home
      </button>
    </div>
  );
}
