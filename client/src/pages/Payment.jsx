import { useEffect, useState } from "react";
import Comingsoon from "../components/comingsoon";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      const jsonData = { error: "Kindly Login First" };
      alert(jsonData.error);
      navigate("/login");
    }
  });
  useEffect(() => {
    const token = localStorage.getItem("Token")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const configuration = {
      method: "get",
      url: "https://api.varchas23.in/payment",
    };
    axios(configuration)
      .then((result) => {
        setData(result.data.message);
        // alert(result.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);
  return (
    <main className="relative w-full h-full mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl z-0 flex flex-col items-center justify-center">
      <div className="text-emerald-500 text-[2.5rem] font-mono capitalize my-10">
        {Data}
      </div>

      <div className="w-[80%]">
        <iframe
          src="https://www.meraevents.com/ticketWidget?eventId=257798&ucode=organizer&wcode=9063CD-9063CD-333333-9063CD-&theme=1"
          width="100%"
          height="600px"
          frameborder="0px"
        ></iframe>
      </div>
      {/* <Comingsoon /> */}
    </main>
  );
};

export default Payment;
