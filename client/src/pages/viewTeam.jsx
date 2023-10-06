import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VTeam = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      navigate("/");
    }
  });
  return <section className="h-screen w-screen"></section>;
};

export default VTeam;
