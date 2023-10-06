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
    <section className="h-screen items-center flex w-screen flex-col justify-center gap-4">
      <div className="flex flex-col font-mono items-center justify-center  w-fit p-10 rounded-2xl max-h-[70%] shadow-sm shadow-[#09fbd3] backdrop-blur bg-green-100/10 text-white">
        <div className=" text-[3rem]">User Profile</div>
        <div className="w-full">
          <div className="flex justify-between text-[1.25rem] gap-10">
            <div className="">Name -{">"}</div>
            <div className="">{details.name}</div>
          </div>
          <div className="flex justify-between text-[1.25rem] gap-10">
            <div className="">Email -{">"}</div>
            <div className="">{details.email}</div>
          </div>
          <div className="flex justify-between text-[1.25rem] gap-10">
            <div className="">Phone -{">"}</div>
            <div className="">{details.phone}</div>
          </div>
          <div className="flex justify-between text-[1.25rem] gap-10">
            <div className="">College -{">"}</div>
            <div className="">{details.college}</div>
          </div>
        </div>
        <br />
        <div className="text-[1.25rem]">Registered Teams</div>

        {details.team_id && details.team_id.map((e,index)=> (
          <div className="w-full text-center" key={index}>{e}</div>
        ))}
      </div>


      <div className="flex flex-col font-mono items-center justify-center  w-fit p-10 rounded-2xl max-h-[70%] shadow-sm shadow-[#09fbd3] backdrop-blur bg-green-100/10 text-white">
        <div className=" text-[3rem]">Team Details</div>
        <div className="">Coming in progress</div>
        {/* <div className="w-full">
          <div className="flex justify-between text-[1rem] gap-10">
            <div className="">Name -{">"}</div>
            <div className="">{details.name}</div>
          </div>
          <div className="flex justify-between text-[1rem] gap-10">
            <div className="">Email -{">"}</div>
            <div className="">{details.email}</div>
          </div>
          <div className="flex justify-between text-[1rem] gap-10">
            <div className="">Phone -{">"}</div>
            <div className="">{details.phone}</div>
          </div>
          <div className="flex justify-between text-[1rem] gap-10">
            <div className="">College -{">"}</div>
            <div className="">{details.college}</div>
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
