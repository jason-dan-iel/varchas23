import { useEffect } from "react";
import Comingsoon from "../components/comingsoon";
import { useNavigate } from "react-router-dom";
const Payment = () => {
    const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      const jsonData = { error: "Kindly Login First" };
      alert(jsonData.error);
      navigate("/login");
    }
  });
    return(
        <section className="h-screen w-screen">
            <Comingsoon />
        </section>
    )
}

export default Payment;