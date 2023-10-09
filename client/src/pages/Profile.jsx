import { useEffect } from "react";
import { useState } from "react";
import Comingsoon from "../components/comingsoon";
import axios from "axios";
import VTeam from "./viewTeam";

export default function Profiles() {
  const [details, setDetails] = useState({});

  const token = localStorage.getItem("Token");

  const getuserProfile = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const configuration = {
      method: "get",
      url: "https://api.varchas23.in/account/displayProfile/",
    };
    axios(configuration)
      .then((result) => {
        setDetails(result.data);
        // console.log(details);
        naviage("/");
      })
      .catch((error) => {
        // console.log(error);
        // alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getuserProfile();
  }, []);

  return (
    <section className="h-screen items-center flex w-screen flex-col justify-center gap-4 overflow-y:scroll overflow-x-hidden ">
      <div className="  flex min-[320px]:mt-28 min-[320px]:text-[2rem]  md:mt-32 lg:mt-64 mb-5 flex-col font-mono items-center justify-center  items-center justify-center n w-fit p-10 rounded-2xl max-h-[70%] shadow-lg hover:shadow-xl hover:shadow-[#00CCFF] shadow-[#00CCFF] backdrop bg-blue-30 text-white bg-green-100/10 ">
        <div className=" text-sky-500  min-[411px]:text-[2rem] md:text-[3rem] lg:text-[5rem] font-Londrina_sketch sm:text-[3rem]">User Profile</div>
        <div className="w-full">
          <div className="flex justify-between text-[1.25rem] gap-10">
            <div className="text-sky-500 font-Teko min-[411px]:text-[1rem]  md:text-[1.5rem] lg:text-[2rem]">Name :- </div>
            <div className="text-sky-500 font-Teko min-[411px]:text-[1rem]  md:text-[1rem] lg:text-[2rem]">{details.name}</div>
          </div>
          <div className=" flex justify-between text-[1.25rem] gap-10">
            <div className="text-sky-500 font-Teko min-[320px]:text-[1rem]  md:text-[1.5rem] lg:text-[2rem]">Email :-</div>
            <div className="text-sky-500 font-Teko min-[320px]:text-[1rem] md:text-[1.5rem] lg:text-[2rem]">{details.email}</div>
          </div>
          <div className=" flex justify-between text-[1.25rem] gap-10">
            <div className="text-sky-500 font-Teko min-[320px]:text-[1rem] md:text-[1.5rem] lg:text-[2rem]">Phone :- </div>
            <div className="text-sky-500 font-Teko min-[320px]:text-[1rem] md:text-[1.5rem] lg:text-[2rem]">{details.phone}</div>
          </div>
          <div className="flex justify-between min-[320px]:text-[1rem]  text-[1.25rem] gap-10">
            <div className="text-sky-500 font-Teko min-[320px]:text-[1rem]  md:text-[1.5rem] lg:text-[2rem]">College :-</div>
            <div className="text-sky-500 font-Teko min-[320px]:text-[1rem]  md:text-[1.5rem] lg:text-[2rem]">{details.college}</div>
          </div>
        </div>
        <br />
        <div className=" text-sky-500 font-Teko min-[411px]:text-[1rem] md:text-[1.5rem] lg:text-[2.25rem] ">Registered Teams :</div>

        {details.team_id && details.team_id.map((e, index) => (
          <div className="text-sky-500 font-Teko w-full md:text-[1.5rem] lg:text-[2.25rem] text-center mb-3" key={index}>{e}</div>
        ))}
      </div>


      <div className="flex bg-green-100/10 lg:w-120 mb-5 flex-col font-mono items-center justify-center n w-fit p-10 rounded-2xl max-h-[70%] shadow-lg hover:shadow-xl hover:shadow-[#00CCFF] shadow-[#00CCFF] md:w-96 lg:w-120">
        <div className="min-[411px]:text-[2rem] md:text-[3rem] lg:text-[3rem] font-Londrina_sketch text-sky-500">Team Details</div>
        <div className="font-Teko min-[411px]:text-[1rem]   md:text-[2rem] lg:text-[3rem] text-sky-500">Coming in progress</div>
        {/* <div className="w-full">
          <div className="flex justify-between text-[1rem] gap-10">
            <div className="font-Teko">Name -{">"}</div>
            <div className="font-Teko">{details.name}</div>
          </div>
          <div className="flex justify-between text-[1rem] gap-10">
            <div className="font-Teko">Email -{">"}</div>
            <div className="font-Teko">{details.email}</div>
          </div>
          <div className="flex justify-between text-[1rem] gap-10">
            <div className="font-Teko">Phone -{">"}</div>
            <div className="font-Teko">{details.phone}</div>
          </div>
          <div className="flex justify-between text-[1rem] gap-10">
            <div className="font-Teko">College -{">"}</div>
            <div className="font-Teko">{details.college}</div>
          </div>
        </div>
        <br />
        <div className="text-[1rem]">Registered Teams</div> */}

        {/* {details.team_id && details.team_id.map((e)=> (
          <div className="w-full">{e}</div>
        ))} */}
      </div>
    </section>
  );
}