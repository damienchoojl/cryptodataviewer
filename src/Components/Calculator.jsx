import { useNavigate } from "react-router-dom";

export default function Calculator() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div>
      <p>Calculator</p>;
      <button className="btn btn-outline-secondary" onClick={handleHomeClick}>
        Home
      </button>
    </div>
  );
}
