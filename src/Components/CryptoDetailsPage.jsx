import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import CryptoDetailsInfo from "./CryptoDetailsInfo";

export default function CryptoDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cryptoDetails, setCryptoDetails] = useState(null);

  useEffect(() => {
    async function fetchCryptoDetails() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/exchanges/${id}`
        );
        const data = await response.json();
        setCryptoDetails(data);
      } catch (error) {
        console.error("Error fetching crypto details:", error);
      }
    }

    fetchCryptoDetails();
  }, [id]);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <CryptoDetailsInfo cryptoDetails={cryptoDetails} />
      <button className="btn btn-outline-secondary" onClick={handleHomeClick}>
        Home
      </button>
    </div>
  );
}
