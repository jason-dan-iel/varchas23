import { useEffect } from "react";
import { useState } from "react";

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
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center p-4 rounded-2xl hover:shadow-xl hover:shadow-emerald-300 overflow-auto max-h-[70%] w-fit h-fit shadow shadow-[#09fbd3]">
          <div className="mt-4 space-y-6 w-96 text-white">
            <div className="text-center text-xl font-semibold mb-4">
              Profile
            </div>
            <div className="">
              <div className="flex justify-between">
                <h3 className=" font-semibold leading-normal text-blueGray-700 mb-2">
                  Name :
                </h3>
                <h3>{details.name} </h3>
              </div>

              <div className="flex justify-between">
                <h3 className=" font-semibold leading-normal text-blueGray-700 mb-2">
                  Username :
                </h3>
                <h3>{details.username} </h3>
              </div>

              <div className="flex justify-between">
                <h3 className=" font-semibold leading-normal text-blueGray-700 mb-2">
                  College :
                </h3>
                <h3>{details.college} </h3>
              </div>

              <div className="flex justify-between">
                <h3 className=" font-semibold leading-normal text-blueGray-700 mb-2">
                  Events :
                </h3>
                <ul className="list-disc text-left">
                  {events.map((element) => {
                    return (
                      <li key={element}>
                        {element.charAt(0).toUpperCase() + element.slice(1)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
