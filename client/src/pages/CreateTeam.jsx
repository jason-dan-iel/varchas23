import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import FormAction from "../components/formaction";
import { eventOptions, categoryOptions, teamTypeOptions } from "../constants";
import Select from "react-select";
const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

let categoryList = [];
let teamList = [];
const TeamCreate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      const jsonData = { error: "Kindly Login First" };
      alert(jsonData.error);
      navigate("/login");
    }
  });

  //   const registerEvent = async () => {
  //     const result = await fetch(
  //       "https://server-sigma-neon.vercel.app/api/events/register",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ token: token, event: "civiq" }),
  //       }
  //     );

  //     const jsonData = await result.json();
  //     try {
  //       alert(jsonData.success);
  //       navigate("/");
  //     } catch (error) {
  //       alert(jsonData.error);
  //     }
  //   };
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTeamType, setSelectedTeamType] = useState([]);

  const eventChangeHandler = (event) => {
    const selectedEventValue = event.target.value;
    setSelectedEvent(selectedEventValue);

    // Find the selected event to get its category and team types
    const selectedEventObj = eventOptions.find(
      (event) => event.value === selectedEventValue
    );
    if (selectedEventObj) {
      let categoryValues = selectedEventObj.category;
      categoryList = [];
      setSelectedCategory(categoryValues);
      if(Array.isArray(categoryValues)){
        categoryList=categoryValues;
      }else{
        categoryList = [categoryValues];
      }
      setSelectedTeamType([]);
      
      let teamValues = selectedEventObj.teamTypes;
      teamList = [];
      setSelectedCategory(teamValues);
      for (let i = 0; i<teamValues.length; i++){
        teamList[i] = {value:teamValues[i], label:teamValues[i]};
      }

    }
    // console.log(teamList);
  };

  const categoryChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedTeamType([]);
  };

  const teamTypeChangeHandler = (event) => {
    setSelectedTeamType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTeam();
  }

  const createTeam = () => {
    // const configuration = {
    //   method: "post",
    //   url: "https://server-sigma-neon.vercel.app/api/user/register",
    //   data: signupState,
    // };
    // axios(configuration)
    //   .then((result) => {
    //     alert(result.data.success);
    //     naviage("/")
    //   })
    //   .catch((error) => {
    //     alert(error.response.data.error);
    //   });
    console.log({category : selectedCategory,sport : selectedEvent, team : selectedTeamType})
  }

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center p-4 rounded-2xl hover:shadow-xl hover:shadow-emerald-300 overflow-auto max-h-[70%] w-fit h-fit shadow shadow-[#09fbd3]">
        <Header heading="Event Registration" logoUrl={"/VLW.png"} />
        <form className="mt-4 space-y-6 w-96" onSubmit={handleSubmit}>
          <div className="">
            <div>
              <label>Select an Event:</label>
              <select
                value={selectedEvent}
                onChange={eventChangeHandler}
                className={fixedInputClass}
              >
                <option value="">Select an Event</option>
                {eventOptions.map((event) => (
                  <option key={event.value} value={event.value}>
                    {event.label}
                  </option>
                ))}
              </select>
            </div>
            {(
              <div>
                <label>Select a Category:</label>
                <select
                  value={selectedCategory}
                  onChange={categoryChangeHandler}
                  className={fixedInputClass}
                >
                  <option value="">Select a Category</option>
                  {categoryList.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {(
              <div>
                <label>Select a Team Type:</label>
                {/* <select
                  value={selectedTeamType}
                  onChange={teamTypeChangeHandler}
                  className={fixedInputClass}
                >
                  <option value="">Select a Team Type</option>
                  {teamList.map((teamType) => (
                    <option key={teamType} value={teamType}>
                      {teamType}
                    </option>
                  ))}
                </select> */}
                <Select 
                closeMenuOnSelect={false}
                defaultValue={"Select a Team Type"}
                isMulti
                options = {teamList}
                value = {selectedTeamType.map((x) => ({
                  value : x,
                  label : x,
                }))}
                onChange={(selectedOptions) => {
                  setSelectedTeamType(selectedOptions.map((option) => option.value));
                }}
                />
              </div>
            )}
            <FormAction handleSubmit={handleSubmit} text="Create Team" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default TeamCreate;
