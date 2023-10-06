import { useEffect } from "react";
import { useState } from "react";
import Comingsoon from "../components/comingsoon";
import axios from "axios";

export default function Profiles() {
  const [details, setDetails] = useState({});

  const token = localStorage.getItem("Token");

  const getuserProfile = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const configuration = {
      method: "post",
      url: "https://api.varchas23.in/account/displayProfile/",
    };
    axios(configuration)
      .then((result) => {
        localStorage.setItem("team_token", result.data.team_token)
        setDetails(result.data.profile);
        naviage("/")
      })
      .catch((error) => {
        console.log(error)
        alert(error.response.data.message);
      });
  }
    // const data = {
    //   team_id: "adfdafadsf",
    //   college: "IIT Jodhpur",
    //   phone: "7340293578",
    //   name: "Jason Daniel",
    // };
    // setEvents(data.events);

  useEffect(() => {
    getuserProfile();
  }, []);

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center  w-fit p-10 rounded-2xl max-h-[70%] shadow-sm shadow-[#09fbd3] backdrop-blur bg-green-100/10">
        <div className="section_subtitle px-3 py-2 font-bold text-[5rem] text-[#F66B0E]">
          Profile
        </div>

        <div className=" text-[#256D85] text-[2.5rem]">
          <h1> {details.name}</h1>
        </div>
        <div className="flex gap-6 text-[1.5rem] items-center text-[#a5ba81] ">
          <h3 className="text-[2rem] text-[#cd88de] text-right">College :</h3> {details.college}{" "}
        </div>
        <div className="flex gap-6 text-[1.5rem]  items-center text-[#a5ba81] ">
          <h3 className="text-[2rem] text-[#cd88de]">Team ID: </h3> {details.team_id}{" "}
        </div>
        <div className="flex gap-6 text-[1.5rem] items-center text-[#a5ba81]">
          <h3 className="text-[2rem] text-[#cd88de]">Phone : </h3> {details.phone}
        </div>
      </div>
    </section>
  );
}
