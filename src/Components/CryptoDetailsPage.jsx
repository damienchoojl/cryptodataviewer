import { useNavigate } from "react-router-dom";

export default function CryptoDetailsPage() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleHomeClick}>Home</button>
    </div>
  );
}
