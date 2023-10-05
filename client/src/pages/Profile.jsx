import { useEffect } from "react";
import { useState } from "react";
import Comingsoon from "../components/comingsoon";

export default function Profiles() {
  const [details, setDetails] = useState({});
  const [events, setEvents] = useState([]);

  const token = localStorage.getItem("Token");
  const getuserProfile = async () => {
    const user = await fetch(
      "https://server-sigma-neon.vercel.app/api/user/getUser",
      {
        method: "POST",
        body: JSON.stringify({ token: token }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await user.json();
    setDetails(data);
    setEvents(data.events);
  };
  
  useEffect(() => {
    getuserProfile();
  }, []);
  return (
    <section className="h-screen min-h-[100vh] flex items-center justify-center ">
      <Comingsoon />
      {/* <div className="flex xl:flex-row flex-col items-center justify-start">
      <div className="cta_content p-5 w-[100%] mt-[100px] bg-[#F0EABE] rounded-[20px]" >
        <div className="section_title_container" >
          <div className="section_subtitle px-3 py-2 font-bold text-[2rem] text-[#F66B0E]" >Profile</div>

          <div className="section_title p-3 text-[#256D85]"><h1 > Jason Daniel</h1></div>
          <div className="section_subtitle" ><h3>College : </h3></div>
          <div className="section_subtitle" ><h3>Team : </h3></div>
          <div className="section_subtitle" ><h3 >Phone : </h3></div>
        </div>
        </div>
      </div> */}
    </section>
  );
}
