import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VTeam = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      const jsonData = { error: "Kindly Login First" };
      alert(jsonData.error);
      navigate("/login");
    }
  });
  return <section className="h-screen w-screen"></section>;
};

export default VTeam;
