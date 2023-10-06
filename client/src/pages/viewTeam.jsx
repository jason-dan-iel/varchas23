import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Comingsoon from "../components/comingsoon";

const VTeam = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      navigate("/");
    }
  });
  const [details, setDetails] = useState({});
  const [team, setTeam] = useState([]);

  const token = localStorage.getItem("Token");

  const getTeamProfile = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const configuration = {
      method: "post",
      url: "https://api.varchas23.in/account/displayTeam/",
    };
    axios(configuration)
      .then((result) => {
        localStorage.setItem("team_token", result.data.team_token);
        setDetails(result.data.profile);
        setTeam(result.data.profile.team_id);
        naviage("/");
      })
      .catch((error) => {
        // alert(error.response.data.message);
      });
      // const data = {
      //   team_token : "adfadfsa",
      //   profile : {
      //     college : "IIT JODHPUR",
      //     phone : "7340293578" ,
      //     team_id : [
      //       {team_id : "evdfr", team_members : ["adsfadsf", "adsfadsf"]},
      //       {team_id : "dasfadsf", team_members : ["asdfdasf", "adsfadsfa","adfadsfad"]},
      //     ],
      //     captain: true,
      //   }
      // }

      // setDetails(data.profile);
      // setTeam(data.profile.team_id);
      console.log(team);
  };
  useEffect(() => {
    getTeamProfile();
  }, []);

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="">
        <div className="flex flex-col items-center justify-center  w-fit p-10 rounded-2xl max-h-[70%] shadow-sm shadow-[#09fbd3] backdrop-blur bg-green-100/10">
          <div className="section_subtitle px-3 py-2 font-bold text-[4.5rem] text-[#F66B0E]">
            Team Data
          </div>
          <div className="flex gap-6 text-[1.5rem] items-center justify-center text-[#a5ba81] ">
            <h3 className="text-[2rem]  text-right">College :</h3>{" "}
            {details.college}{" "}
          </div>
          <div className="flex gap-6 text-[1.5rem] items-center justify-center text-[#a5ba81]">
            <h3 className="text-[2rem] ">Phone : </h3> {details.phone}
          </div>
          <div className="flex gap-6 text-[1.5rem] items-center justify-center text-[#a5ba81]">
            <h3 className="text-[2rem] ">Captain : </h3> {(details.captain)? "Y" : "N"}
          </div>
          <br />
          <div className="flex gap-6 text-[1.5rem] items-center justify-center text-[#a5ba81] flex-col">
            {team &&
              team.map((e) => (
                <div className="">
                  <div className="">
                    <h3 className="text-[2rem]  text-right">Team ID :
                    {e.team_id}
                    </h3>
                  </div>
                  <ul className="list-decimal flex flex-col">
                    {e.team_members && e.team_members.map((e)=>(
                      <li className="">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VTeam;
